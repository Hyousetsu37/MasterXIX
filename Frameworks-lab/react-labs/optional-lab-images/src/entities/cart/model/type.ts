export interface CartContextValues {
	selectedIds: string[];
	toggleCartItem: (id: string) => void;
	isVisible: boolean;
	onToggle: () => void;
	onEmptyBasket: () => void;
}
