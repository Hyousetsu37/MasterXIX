import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import type { CartContextValues } from './type';

const CartContext = createContext<CartContextValues | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [isVisible, setIsVisible] = useState(true);
	const [selectedIds, setSelectedIds] = useState<string[]>([]);

	const toggleCartItem = useCallback(
		(id: string) => {
			setSelectedIds((currentIds) => {
				const isIdInArray = selectedIds.includes(id);
				if (isIdInArray) {
					return currentIds.filter((currentID) => currentID !== id);
				} else {
					return [...currentIds, id];
				}
			});
		},
		[selectedIds],
	);

	const toggleVisible = useCallback(() => {
		setIsVisible((isVisible) => !isVisible);
	}, []);

	const emptyBasket = useCallback(() => {
		setSelectedIds([]);
	}, []);

	const contextValue = useMemo(
		() => ({
			selectedIds,
			toggleCartItem,
			isVisible,
			onToggle: toggleVisible,
			onEmptyBasket: emptyBasket,
		}),
		[isVisible, toggleVisible, emptyBasket, selectedIds, toggleCartItem],
	);
	return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCartModel = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCartModel can only be used inside a CartProvider');
	}
	return context;
};
