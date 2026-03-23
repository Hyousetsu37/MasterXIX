import type { PictureInfo } from '@entities/picture/model/type';

export interface CartContextValues {
	picturesInCart: PictureInfo[];
	onDeletePicture: (id: string) => void;
	isVisible: boolean;
	onToggle: () => void;
	onEmptyBasket: () => void;
}
