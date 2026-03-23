import { useCartModel } from '@entities/cart/model/cartContext';
import { usePictureModel } from '@entities/picture/model/pictureContext';
import { PictureList } from '@widgets/picture-list/PictureList';

export const KittiesPage = () => {
	const { catPictures } = usePictureModel();
	const { toggleCartItem, selectedIds } = useCartModel();

	return (
		<PictureList
			pictureList={catPictures}
			onTogglePicture={toggleCartItem}
			selectedPictures={selectedIds}
		/>
	);
};
