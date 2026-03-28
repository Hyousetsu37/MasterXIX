import { createContext, type ReactNode, useCallback, useContext, useMemo, useReducer } from 'react';
import { getOrder } from '../api/getOrder';
import type { OrderAction, OrderContextValue, OrderState } from './type';

const orderContext = createContext<OrderContextValue | null>(null);
const createInitialState = (): OrderState => ({
	orderInfo: { client: '', date: new Date(), id: 'PED-001', lines: [] },
	isLoading: false,
	error: null,
});

const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
	switch (action.type) {
		case 'FETCH_START':
			return { ...state, isLoading: true, error: null };
		case 'FETCH_SUCCESS':
			return { ...state, isLoading: false, orderInfo: action.payload, error: null };
		case 'FETCH_ERROR':
			return { ...state, isLoading: false, error: action.payload };
		case 'TOOGGLE_LINE':
			return {
				...state,
				orderInfo: {
					...state.orderInfo,
					lines: state.orderInfo.lines.map((line) => {
						if (line.id === action.payload) {
							return { ...line, state: line.state === 'Valido' ? 'Pendiente' : 'Valido' };
						}
						return line;
					}),
				},
			};
		default:
			return state;
	}
};

export const OrderContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(orderReducer, createInitialState());

	const ToggleLineState = useCallback((lineId: string) => {
		dispatch({ type: 'TOOGGLE_LINE', payload: lineId });
	}, []);

	const totalAmount = useMemo(() => {
		return state.orderInfo.lines.reduce((acc, line) => {
			return line.amount + acc;
		}, 0);
	}, [state.orderInfo]);

	const orderCompletionPercentage = useMemo(() => {
		const totalLines = state.orderInfo.lines.length;
		if (totalLines === 0) return 0;

		const validateLinesCount = state.orderInfo.lines.filter(
			(line) => line.state === 'Valido',
		).length;
		return validateLinesCount / state.orderInfo.lines.length;
	}, [state.orderInfo]);

	const loadOrder = useCallback(async (orderId: string) => {
		dispatch({ type: 'FETCH_START' });
		try {
			const fetchedOrderInfo = await getOrder(orderId);
			dispatch({ type: 'FETCH_SUCCESS', payload: fetchedOrderInfo });
		} catch (error) {
			dispatch({ type: 'FETCH_ERROR', payload: `Failed to load order data ${error}` });
		}
	}, []);

	const contextValue = useMemo(
		() => ({
			loadOrder,
			orderInfo: state.orderInfo,
			totalAmount,
			orderCompletionPercentage,
			isLoading: state.isLoading,
			error: state.error,
			ToggleLineState,
		}),
		[
			loadOrder,
			state.orderInfo,
			totalAmount,
			orderCompletionPercentage,
			state.isLoading,
			state.error,
			ToggleLineState,
		],
	);
	return <orderContext.Provider value={contextValue}>{children}</orderContext.Provider>;
};

export const useOrderModel = () => {
	const context = useContext(orderContext);
	if (!context) {
		throw new Error('useOrderModel needs to be used inside OrderContextProvider');
	}
	return context;
};
