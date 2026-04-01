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
export interface OrderStateContextValue {
	orderCompletionPercentage: number;
	isLoading: boolean;
	error: string | null;
	orderInfo: OrderEntity;
	totalAmount: number;
	selectedLines: string[];
}
export interface OrderDispatchContextValue {
	loadOrder: (orderId: string) => void;
	toggleCheckbox: (lineId: string) => void;
	changeLineState: (newState: LineState) => void;
	changeLineAmount: (lineId: string, newAmount: number) => void;
}

export interface OrderState {
	orderInfo: OrderEntity;
	isLoading: boolean;
	error: string | null;
	selectedLines: string[];
}

export type OrderAction =
	| { type: 'FETCH_START' }
	| { type: 'FETCH_SUCCESS'; payload: OrderEntity }
	| { type: 'FETCH_ERROR'; payload: string }
	| { type: 'TOGGLE_CHECKBOX'; payload: string }
	| { type: 'CHANGE_LINE_STATE'; payload: LineState }
	| { type: 'CHANGE_LINE_AMOUNT'; payload: { lineId: string; newAmount: number } };
