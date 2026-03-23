import { RouterProvider } from 'react-router';
import { AppProvider } from './providers/AppProvider';
import { appRouter } from './providers/router';

export const App = () => {
	return (
		<AppProvider>
			<RouterProvider router={appRouter} />
		</AppProvider>
	);
};
