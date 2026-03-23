export interface PictureInfo {
	id: string;
	picUrl: string;
	title: string;
}
export interface PictureContextValues {
	catPictures: PictureInfo[];
	dogPictures: PictureInfo[];
	pictures: PictureInfo[];
	selectedIds: string[];
	setSelectedIds: (selectedIds: string[]) => void;
	onTogglePicture: (id: string) => void;
	setCatPictures: (pictures: PictureInfo[]) => void;
	setDogPictures: (pictures: PictureInfo[]) => void;
}
