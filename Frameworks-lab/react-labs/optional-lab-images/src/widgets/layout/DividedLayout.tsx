import { useCartModel } from '@entities/cart/model/cartContext';
import { Box } from '@mui/material';
import { CartPage } from '@pages/CartPage';
import type { ReactNode } from 'react';

export const DividedLayout = ({ children }: { children: ReactNode }) => {
	const { isVisible } = useCartModel();
	return (
		<Box sx={{ display: 'flex', flexGrow: 1 }}>
			<Box sx={{ flexGrow: 1, p: 4 }}>{children}</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: isVisible ? '35vw' : '0vw',
					minWidth: isVisible ? '350px' : '0px',
					opacity: isVisible ? 1 : 0,
					borderLeft: isVisible ? '1px solid' : '0px solid',
					borderColor: 'divider',
					overflow: 'hidden',
					transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
				}}
			>
				{/* 2. THE CONTENT (Inner Box) - Handles the padding and keeps a fixed size */}
				<Box
					sx={{
						width: '35vw',
						minWidth: '350px',
						p: 4, // Padding moved here!
						height: '100%',
					}}
				>
					<CartPage />
				</Box>
			</Box>
		</Box>
	);
};
