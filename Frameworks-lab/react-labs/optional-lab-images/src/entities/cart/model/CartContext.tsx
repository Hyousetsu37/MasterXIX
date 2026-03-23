import { usePictureModel } from '@entities/picture/model/pictureContext';
import type { PictureInfo } from '@entities/picture/model/type';
import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import type { CartContextValues } from './type';

const CartContext = createContext<CartContextValues | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [picturesInCart, setPicturesInCart] = useState<PictureInfo[]>([]);
	const { pictures, selectedIds, onTogglePicture, setSelectedIds } = usePictureModel();
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const selectedPictures = pictures.filter((picture) => selectedIds.includes(picture.id));
		setPicturesInCart(selectedPictures);
	}, [selectedIds, pictures]);

	const onDeletePicture = useCallback(
		(id: string) => {
			setPicturesInCart((currentPicturesInCart) =>
				currentPicturesInCart.filter((pictureInCart) => pictureInCart.id !== id),
			);
			onTogglePicture(id);
		},
		[onTogglePicture],
	);

	const toggleVisible = useCallback(() => {
		setIsVisible((isVisible) => !isVisible);
	}, []);

	const emptyBasket = useCallback(() => {
		setSelectedIds([]);
	}, [setSelectedIds]);

	const contextValue = useMemo(
		() => ({
			picturesInCart,
			onDeletePicture,
			isVisible,
			onToggle: toggleVisible,
			onEmptyBasket: emptyBasket,
		}),
		[picturesInCart, onDeletePicture, isVisible, toggleVisible, emptyBasket],
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
