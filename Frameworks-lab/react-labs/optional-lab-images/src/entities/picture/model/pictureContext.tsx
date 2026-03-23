import { createContext, type ReactNode, useContext, useMemo, useState } from 'react';
import { kittiesData, puppiesData } from './mockedData';
import type { PictureContextValues, PictureInfo } from './type';

const PictureContext = createContext<PictureContextValues | null>(null);

interface PictureProviderProps {
	children: ReactNode;
}

export const PictureProvider = ({ children }: PictureProviderProps) => {
	const [catPictures] = useState<PictureInfo[]>(kittiesData);
	const [dogPictures] = useState<PictureInfo[]>(puppiesData);
	const pictures = useMemo(() => [...catPictures, ...dogPictures], [catPictures, dogPictures]);

	const contextValue: PictureContextValues = useMemo(
		() => ({
			catPictures,
			dogPictures,
			pictures,
		}),
		[catPictures, dogPictures, pictures],
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
