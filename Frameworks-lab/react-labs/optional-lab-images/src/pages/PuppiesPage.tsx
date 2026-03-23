import { puppiesData } from '@entities/picture/model/mockedData';
import { usePictureModel } from '@entities/picture/model/pictureContext';
import { PictureList } from '@widgets/picture-list/PictureList';
import { useEffect } from 'react';

export const PuppiesPage = () => {
	const { dogPictures, selectedIds, onTogglePicture, setDogPictures } = usePictureModel();

	useEffect(() => {
		setDogPictures(puppiesData);
	}, [setDogPictures]);

	return (
		<PictureList
			pictureList={dogPictures}
			onTogglePicture={onTogglePicture}
			selectedPictures={selectedIds}
		/>
	);
};
