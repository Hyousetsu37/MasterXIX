import { Box, Typography } from '@mui/material';
import { OrdersHeader } from '@widgets/order-header/ui/OrdersHeader';
import { OrdersList } from '@widgets/orders-list/ui/OrdersList';

export const OrderPage = () => {
	return (
		<Box>
			<Typography>Orders Page</Typography>
			<OrdersHeader />
			<OrdersList />
		</Box>
	);
};
