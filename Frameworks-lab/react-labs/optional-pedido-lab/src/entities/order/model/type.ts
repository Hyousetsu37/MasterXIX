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
	orderCompletionPercentage: number;
	isLoading: boolean;
	error: string | null;
	orderInfo: OrderEntity;
	totalAmount: number;
	loadOrder: (orderId: string) => void;
	ToggleLineState: (lineId: string) => void;
}

export interface OrderState {
	orderInfo: OrderEntity;
	isLoading: boolean;
	error: string | null;
}

export type OrderAction =
	| { type: 'FETCH_START' }
	| { type: 'FETCH_SUCCESS'; payload: OrderEntity }
	| { type: 'FETCH_ERROR'; payload: string }
	| { type: 'TOOGGLE_LINE'; payload: string };
