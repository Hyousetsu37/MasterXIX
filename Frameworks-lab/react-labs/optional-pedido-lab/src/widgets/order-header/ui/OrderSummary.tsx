import { Button, Stack, TextField } from '@mui/material';

interface OrderSummaryProps {
	totalAmount: number;
	orderCompletionPercentage: number;
}

const currencyFormatter = new Intl.NumberFormat('es-ES', {
	style: 'currency',
	currency: 'EUR',
});

export const OrderSummary = ({ orderCompletionPercentage, totalAmount }: OrderSummaryProps) => {
	const formattedAmount = currencyFormatter.format(totalAmount);

	return (
		<Stack
			direction={{ xs: 'column', sm: 'row' }}
			spacing={2}
			alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
			justifyContent="space-between"
		>
			<Stack direction="row" spacing={3} alignItems="center">
				<TextField
					label="Importe Total"
					value={formattedAmount}
					slotProps={{ input: { readOnly: true } }}
					size="small"
					sx={{ width: '150px' }}
				/>

				<TextField
					label="Estado"
					value={`${orderCompletionPercentage.toFixed(2)}%`}
					slotProps={{ input: { readOnly: true } }}
					size="small"
					sx={{
						width: '100px',
						'& .MuiOutlinedInput-root': {
							color: orderCompletionPercentage === 100 ? 'success.main' : 'text.primary',
							fontWeight: 'bold',
							'& fieldset': {
								borderColor: orderCompletionPercentage === 100 ? 'success.main' : 'divider',
								borderWidth: orderCompletionPercentage === 100 ? 2 : 1,
							},
						},
						'& .MuiInputLabel-root': {
							color: orderCompletionPercentage === 100 ? 'success.main' : 'text.secondary',
						},
					}}
				/>
			</Stack>

			<Button
				variant="contained"
				color="primary"
				disabled={orderCompletionPercentage !== 100}
				sx={{ minWidth: '120px', height: '40px', fontWeight: 'bold' }}
			>
				Enviar
			</Button>
		</Stack>
	);
};
