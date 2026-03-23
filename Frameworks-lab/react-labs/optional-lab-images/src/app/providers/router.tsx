import { KittiesPage } from '@pages/KittiesPage';
import { PuppiesPage } from '@pages/PuppiesPage';
import { DividedLayout } from '@widgets/layout/DividedLayout';
import { MainLayout } from '@widgets/layout/MainLayout';
import { createBrowserRouter, Outlet } from 'react-router';
import { appRoutes } from './appRoutes.routes';
import { CheckoutPage } from '@pages/CheckoutPage';
import { WelcomePage } from '@pages/WelcomePage';

const SelectProductRoutes = () => {
	return (
		<DividedLayout>
			<Outlet />
		</DividedLayout>
	);
};

export const appRouter = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: '*', element: <WelcomePage /> },
			{
				element: <SelectProductRoutes />,
				children: [
					{ path: appRoutes.kitties, element: <KittiesPage /> },
					{ path: appRoutes.puppies, element: <PuppiesPage /> },
				],
			},
			{ path: appRoutes.checkout, element: <CheckoutPage /> },
		],
	},
]);
