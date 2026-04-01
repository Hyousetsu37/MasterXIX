import { WelcomePage } from '@pages/WelcomePage';
import { createBrowserRouter } from 'react-router';
import { OrderPage } from '../../pages/OrderPage';

export const appRouter = createBrowserRouter([
	{ path: '/', element: <WelcomePage /> },
	{ path: '/orders/:id', element: <OrderPage /> },
]);
