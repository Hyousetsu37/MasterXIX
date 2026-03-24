import type { ReactNode } from 'react';
import { DarkThemeProvider } from './DarkThemeProvider';
import { OrderContextProvider } from '@entities/order/model/OrderContext';

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<DarkThemeProvider>
			<OrderContextProvider>{children}</OrderContextProvider>
		</DarkThemeProvider>
	);
};
