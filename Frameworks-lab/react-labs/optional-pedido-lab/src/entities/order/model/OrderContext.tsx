import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { getOrder } from '../api/getOrder';
import type { OrderContextValue, OrderEntity } from './type';

const orderContext = createContext<OrderContextValue | null>(null);
const createEmptyOrder = (): OrderEntity => ({
	client: '',
	date: new Date(),
	id: 'PED-001',
	lines: [],
});

export const OrderContextProvider = ({ children }: { children: ReactNode }) => {
	const [orderInfo, setOrderInfo] = useState<OrderEntity>(createEmptyOrder());

	const totalAmount = useMemo(() => {
		return orderInfo?.lines.reduce((acc, line) => {
			return line.amount + acc;
		}, 0);
	}, [orderInfo]);

	const state = useMemo(() => {
		if (orderInfo) {
			return (
				orderInfo?.lines.filter((line) => line.state === 'Valido').length / orderInfo?.lines.length
			);
		} else {
			return 0;
		}
	}, [orderInfo]);

	const loadOrder = useCallback(async (orderId: string) => {
		console.log(orderId);
		const fetchedOrderInfo = await getOrder(orderId);
		setOrderInfo(fetchedOrderInfo);
	}, []);

	const contextValue = useMemo(
		() => ({ loadOrder, orderInfo, totalAmount, state }),
		[loadOrder, orderInfo, totalAmount, state],
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
