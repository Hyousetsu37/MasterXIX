import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import type { PictureContextValues, PictureInfo } from './type';

const PictureContext = createContext<PictureContextValues | null>(null);

interface PictureProviderProps {
	children: ReactNode;
}

export const PictureProvider = ({ children }: PictureProviderProps) => {
	const [pictures, setPictures] = useState<PictureInfo[]>([]);
	const [selectedIds, setSelectedIds] = useState<string[]>([]);
	const [catPictures, setCatPictures] = useState<PictureInfo[]>([]);
	const [dogPictures, setDogPictures] = useState<PictureInfo[]>([]);

	const handleToggle = useCallback(
		(id: string) => {
			const isIdInArray = selectedIds.includes(id);
			if (isIdInArray) {
				setSelectedIds((currentIds) => currentIds.filter((currentID) => currentID !== id));
			} else {
				setSelectedIds((currentIds) => [...currentIds, id]);
			}
		},
		[selectedIds],
	);

	useEffect(() => {
		setPictures([...catPictures, ...dogPictures]);
	}, [catPictures, dogPictures]);

	const contextValue: PictureContextValues = useMemo(
		() => ({
			onTogglePicture: handleToggle,
			catPictures,
			dogPictures,
			setCatPictures,
			setDogPictures,
			selectedIds,
			pictures,
			setSelectedIds,
		}),
		[handleToggle, catPictures, dogPictures, selectedIds, pictures],
	);

	return <PictureContext.Provider value={contextValue}>{children}</PictureContext.Provider>;
};

export const usePictureModel = () => {
	const context = useContext(PictureContext);
	if (!context) {
		throw new Error('usePictureModel has to be used inside a PictureProvider');
	}
	return context;
};
