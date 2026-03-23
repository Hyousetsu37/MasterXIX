import { usePictureModel } from '@entities/picture/model/pictureContext';
import { PictureList } from '@widgets/picture-list/PictureList';

export const KittiesPage = () => {
	const { catPictures } = usePictureModel();

	return <PictureList pictureList={catPictures} />;
};
