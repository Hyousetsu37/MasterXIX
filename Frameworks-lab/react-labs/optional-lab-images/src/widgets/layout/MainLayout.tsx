import { Box } from '@mui/material';
import { Navbar } from '@widgets/navbar/Navbar';
import { Outlet } from 'react-router';

export const MainLayout = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
			<Navbar />
			<Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
				<Outlet />
			</Box>
		</Box>
	);
};
