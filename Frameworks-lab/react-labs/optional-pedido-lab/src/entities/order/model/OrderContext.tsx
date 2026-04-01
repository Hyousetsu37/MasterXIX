import { createContext, type ReactNode, useCallback, useContext, useMemo, useReducer } from 'react';
import { getOrder } from '../api/getOrder';
import type {
	LineState,
	OrderAction,
	OrderDispatchContextValue,
	OrderState,
	OrderStateContextValue,
} from './type';

const OrderStateContext = createContext<OrderStateContextValue | null>(null);
const OrderDispatchContext = createContext<OrderDispatchContextValue | null>(null);

const createInitialState = (): OrderState => ({
	orderInfo: { client: '', date: new Date(), id: 'PED-001', lines: [] },
	isLoading: false,
	error: null,
	selectedLines: [],
});

const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
	switch (action.type) {
		case 'FETCH_START':
			return { ...state, isLoading: true, error: null };
		case 'FETCH_SUCCESS':
			return { ...state, isLoading: false, orderInfo: action.payload, error: null };
		case 'FETCH_ERROR':
			return { ...state, isLoading: false, error: action.payload };
		case 'TOGGLE_CHECKBOX': {
			const lineId = action.payload;
			const isSelected = state.selectedLines.includes(lineId);
			return {
				...state,
				selectedLines: isSelected
					? state.selectedLines.filter((id) => id !== lineId)
					: [...state.selectedLines, lineId],
			};
		}
		case 'CHANGE_LINE_STATE':
			return {
				...state,
				orderInfo: {
					...state.orderInfo,
					lines: state.orderInfo.lines.map((line) => {
						if (state.selectedLines.includes(line.id)) {
							return { ...line, state: action.payload };
						}
						return line;
					}),
				},
				selectedLines: [],
			};
		case 'CHANGE_LINE_AMOUNT':
			return {
				...state,
				orderInfo: {
					...state.orderInfo,
					lines: state.orderInfo.lines.map((line) =>
						line.id === action.payload.lineId
							? { ...line, amount: action.payload.newAmount }
							: line,
					),
				},
			};
		default:
			return state;
	}
};

export const OrderContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(orderReducer, createInitialState());

	const changeLineState = useCallback((newState: LineState) => {
		dispatch({ type: 'CHANGE_LINE_STATE', payload: newState });
	}, []);

	const toggleCheckbox = useCallback((lineId: string) => {
		dispatch({ type: 'TOGGLE_CHECKBOX', payload: lineId });
	}, []);

	const changeLineAmount = useCallback((lineId: string, newAmount: number) => {
		dispatch({ type: 'CHANGE_LINE_AMOUNT', payload: { lineId, newAmount } });
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
		return (validateLinesCount / state.orderInfo.lines.length) * 100;
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

	const contextStateValue = useMemo<OrderStateContextValue>(
		() => ({
			orderInfo: state.orderInfo,
			totalAmount,
			orderCompletionPercentage,
			isLoading: state.isLoading,
			error: state.error,
			selectedLines: state.selectedLines,
		}),
		[
			state.orderInfo,
			totalAmount,
			orderCompletionPercentage,
			state.isLoading,
			state.error,
			state.selectedLines,
		],
	);

	const contextDispatchValue = useMemo<OrderDispatchContextValue>(
		() => ({
			loadOrder,
			changeLineState,
			toggleCheckbox,
			changeLineAmount,
		}),
		[loadOrder, changeLineState, toggleCheckbox, changeLineAmount],
	);
	return (
		<OrderStateContext.Provider value={contextStateValue}>
			<OrderDispatchContext.Provider value={contextDispatchValue}>
				{children}
			</OrderDispatchContext.Provider>
		</OrderStateContext.Provider>
	);
};

export const useOrderStateModel = () => {
	const context = useContext(OrderStateContext);
	if (!context) {
		throw new Error('useOrderStateModel needs to be used inside OrderStateContext.Provider');
	}
	return context;
};

export const useOrderDispatchModel = () => {
	const context = useContext(OrderDispatchContext);
	if (!context) {
		throw new Error('useOrderDispatchModel needs to be used inside OrderDispatchContext.Provider');
	}
	return context;
};
