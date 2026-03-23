export interface PictureInfo {
	id: string;
	picUrl: string;
	title: string;
}
export interface PictureContextValues {
	catPictures: PictureInfo[];
	dogPictures: PictureInfo[];
	pictures: PictureInfo[];
}
