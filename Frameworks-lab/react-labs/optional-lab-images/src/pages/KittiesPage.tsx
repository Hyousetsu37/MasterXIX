import { kittiesData } from '@entities/picture/model/mockedData';
import { usePictureModel } from '@entities/picture/model/pictureContext';
import { PictureList } from '@widgets/picture-list/PictureList';
import { useEffect } from 'react';

export const KittiesPage = () => {
	const { catPictures, selectedIds, onTogglePicture, setCatPictures } = usePictureModel();

	useEffect(() => {
		setCatPictures(kittiesData);
	}, [setCatPictures]);

	return (
		<PictureList
			pictureList={catPictures}
			onTogglePicture={onTogglePicture}
			selectedPictures={selectedIds}
		/>
	);
};
