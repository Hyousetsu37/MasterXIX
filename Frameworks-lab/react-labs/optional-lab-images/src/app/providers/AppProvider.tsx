import { CartProvider } from '@entities/cart/model/cartContext';
import { PictureProvider } from '@entities/picture/model/pictureContext';
import type { ReactNode } from 'react';
import { DarkThemeProvider } from './DarkThemeProvider';

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<DarkThemeProvider>
			<PictureProvider>
				<CartProvider>{children}</CartProvider>
			</PictureProvider>
		</DarkThemeProvider>
	);
};
