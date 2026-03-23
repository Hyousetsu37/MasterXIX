import { usePictureModel } from '@entities/picture/model/pictureContext';
import { PictureList } from '@widgets/picture-list/PictureList';

export const PuppiesPage = () => {
	const { dogPictures } = usePictureModel();

	return <PictureList pictureList={dogPictures} />;
};
