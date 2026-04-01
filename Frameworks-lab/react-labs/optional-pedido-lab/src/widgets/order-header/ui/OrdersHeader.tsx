import { useOrderStateModel } from '@entities/order/model/OrderContext';
import { OrderInfo } from '@entities/order/ui/OrderInfo';
import { Paper, Stack } from '@mui/material';
import { OrderSummary } from '@widgets/order-header/ui/OrderSummary';

export const OrdersHeader = () => {
	const { totalAmount, orderInfo, orderCompletionPercentage } = useOrderStateModel();

	return (
		<Paper
			variant="outlined"
			sx={{
				p: 3,
				borderColor: 'divider',
				borderRadius: 2,
				backgroundColor: 'background.paper',
			}}
		>
			<Stack spacing={3}>
				<OrderInfo client={orderInfo.client} date={orderInfo.date} id={orderInfo.id} />
				<OrderSummary
					orderCompletionPercentage={orderCompletionPercentage}
					totalAmount={totalAmount}
				/>
			</Stack>
		</Paper>
	);
};
