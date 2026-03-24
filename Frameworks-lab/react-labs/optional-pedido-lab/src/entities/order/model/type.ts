export interface OrderDto {
	id: string;
	client: string;
	date: string;
	lines: LineDto[];
}

export interface LineDto {
	id: string;
	state: string;
	description: string;
	amount: string;
}

export interface OrderEntity {
	id: string;
	client: string;
	date: Date;
	lines: LineEntity[];
}
export type LineState = 'Pendiente' | 'Valido';
export interface LineEntity {
	id: string;
	state: LineState;
	description: string;
	amount: number;
}

export interface OrderContextValue {
	state: number;
	orderInfo: OrderEntity;
	totalAmount: number;
	loadOrder: (orderId: string) => void;
}
