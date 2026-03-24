import { createBrowserRouter, Outlet } from 'react-router';
import { OrderPage } from '../../pages/OrderPage';

const Welcome = () => {
	return <h1>welcome</h1>;
};

const MainLayout = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

const Orders = () => {
	return <h1>Orders</h1>;
};

export const appRouter = createBrowserRouter([
	{ path: '/', element: <Welcome /> },
	{
		element: <MainLayout />,
		children: [
			{ path: '/orders', element: <Orders /> },
			{ path: '/orders/:id', element: <OrderPage /> },
		],
	},
]);
