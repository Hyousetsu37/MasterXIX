import { useOrderDispatchModel } from '@entities/order/model/OrderContext';
import { ToggleLine } from '@features/toggleLine/ui/ToggleLine';
import { Box, Container, Stack, Typography } from '@mui/material';
import { OrdersHeader } from '@widgets/order-header/ui/OrdersHeader';
import { OrdersList } from '@widgets/orders-list/ui/OrdersList';
import { useEffect } from 'react';
import { useParams } from 'react-router';

export const OrderPage = () => {
	const { id: orderId } = useParams();
	const { loadOrder } = useOrderDispatchModel();

	useEffect(() => {
		if (orderId) {
			loadOrder(orderId);
		}
	}, [orderId, loadOrder]);

	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Stack spacing={4}>
				<Box>
					<Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
						Pedido a proveedor
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Gestiona y valida las líneas de tu pedido.
					</Typography>
				</Box>

				<OrdersHeader />

				<Stack spacing={2}>
					<ToggleLine />
					<OrdersList />
				</Stack>
			</Stack>
		</Container>
	);
};
