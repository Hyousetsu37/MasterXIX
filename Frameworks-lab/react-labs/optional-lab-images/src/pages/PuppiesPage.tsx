import { useCartModel } from '@entities/cart/model/cartContext';
import { usePictureModel } from '@entities/picture/model/pictureContext';
import { PictureList } from '@widgets/picture-list/PictureList';

export const PuppiesPage = () => {
	const { dogPictures } = usePictureModel();
	const { toggleCartItem, selectedIds } = useCartModel();

	return (
		<PictureList
			pictureList={dogPictures}
			onTogglePicture={toggleCartItem}
			selectedPictures={selectedIds}
		/>
	);
};
