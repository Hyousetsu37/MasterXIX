import { Box, Button, InputAdornment, Paper, Stack, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { useOrderModel } from '@entities/order/model/OrderContext';
import { useEffect } from 'react';

export const OrdersHeader = () => {
	const { id: orderId } = useParams();
	const { totalAmount, orderInfo, orderCompletionPercentage: state, loadOrder } = useOrderModel();

	useEffect(() => {
		if (orderId) {
			loadOrder(orderId);
		}
	}, [orderId, loadOrder]);

	return (
		<Box sx={{ mb: 4 }}>
			<Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
				Pedido a proveedor
			</Typography>

			{/* Contenedor principal con el borde, heredará el color 'paper' de tu Dark Theme */}
			<Paper
				variant="outlined"
				sx={{
					p: 3,
					borderColor: 'divider',
					borderRadius: 2,
				}}
			>
				<Stack spacing={3}>
					{/* Fila Superior: Número, Proveedor, Fecha */}
					<Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
						<TextField
							label="ID"
							value={orderInfo.id}
							slotProps={{ input: { readOnly: true } }}
							size="small"
							sx={{ width: { md: '150px' } }}
						/>
						<TextField
							label="Client"
							value={orderInfo.client}
							slotProps={{ input: { readOnly: true } }}
							size="small"
							fullWidth
						/>
						<TextField
							label="Fecha"
							value={orderInfo.date}
							InputProps={{
								readOnly: true,
								endAdornment: <InputAdornment position="end">CalendarIcon</InputAdornment>,
							}}
							size="small"
							sx={{ width: { md: '200px' } }}
						/>
					</Stack>

					{/* Fila Inferior: Importe Total, Estado y Botón Enviar */}
					<Stack
						direction={{ xs: 'column', sm: 'row' }}
						spacing={2}
						alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
						justifyContent="space-between"
					>
						{/* Agrupamos Importe y Estado a la izquierda */}
						<Stack direction="row" spacing={3} alignItems="center">
							<TextField
								label="Importe Total"
								value={`${totalAmount.toFixed(2)}€`}
								InputProps={{ readOnly: true }}
								size="small"
								sx={{ width: '150px' }}
							/>

							<Box sx={{ textAlign: 'center' }}>
								<Typography
									variant="caption"
									color="text.secondary"
									sx={{ display: 'block', mb: 0.5 }}
								>
									Estado
								</Typography>
								<Paper
									variant="outlined"
									sx={{
										p: 1,
										minWidth: '65px',
										borderColor: state === 100 ? 'primary.main' : 'divider',
										color: state === 100 ? 'primary.main' : 'text.primary',
										fontWeight: 'bold',
										borderRadius: 1,
									}}
								>
									{state}%
								</Paper>
							</Box>
						</Stack>

						<Button
							variant="contained"
							color="primary"
							disabled
							sx={{
								minWidth: '120px',
								height: '40px',
								fontWeight: 'bold',
							}}
						>
							Enviar
						</Button>
					</Stack>
				</Stack>
			</Paper>
		</Box>
	);
};
