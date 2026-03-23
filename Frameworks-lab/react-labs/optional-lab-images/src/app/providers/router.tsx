import { createBrowserRouter, Outlet } from 'react-router';
import { appRoutes } from './appRoutes.routes';
import { MainLayout } from '@widgets/layout/MainLayout';
import { DividedLayout } from '@widgets/layout/DividedLayout';
import { KittiesPage } from '@pages/KittiesPage';
import { PuppiesPage } from '@pages/PuppiesPage';

const Welcome = () => {
	return <div>Welcome</div>;
};

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
			{ path: '*', element: <Welcome /> },
			{
				element: <SelectProductRoutes />,
				children: [
					{ path: appRoutes.kitties, element: <KittiesPage /> },
					{ path: appRoutes.puppies, element: <PuppiesPage /> },
				],
			},
		],
	},
]);
