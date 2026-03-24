import type { OrderDto, OrderEntity } from '../model/type';
import { mapLlineDtoToEntity } from './mapLineDtoToEntity';

export const mapOrderDtoToEntity = (order: OrderDto): OrderEntity => {
	const parsedDate = new Date(order.date);
	const date = Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
	return {
		client: order.client,
		date: date,
		id: order.id,
		lines: (order.lines || []).map((line) => mapLlineDtoToEntity(line)),
	};
};
