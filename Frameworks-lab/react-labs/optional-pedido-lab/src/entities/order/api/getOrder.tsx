import { baseOrders } from '@shared/api/baseOrders';
import { mapOrderDtoToEntity } from '../lib/mapOrderDtoToEntity';
import type { OrderDto, OrderEntity } from '../model/type';

export const getOrder = async (orderId: string): Promise<OrderEntity> => {
	const endpoint = `/pedidos/${orderId}`;
	const rawData: OrderDto = await baseOrders(endpoint, { method: 'GET' });
	return mapOrderDtoToEntity(rawData);
};
