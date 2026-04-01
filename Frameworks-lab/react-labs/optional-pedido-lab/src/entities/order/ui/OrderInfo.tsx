import type { OrderEntity } from '@entities/order/model/type';
import { InputAdornment, Stack, TextField } from '@mui/material';
import { memo } from 'react';

const CalendarIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<title>Calendar Icon</title>

		<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
		<line x1="16" y1="2" x2="16" y2="6"></line>
		<line x1="8" y1="2" x2="8" y2="6"></line>
		<line x1="3" y1="10" x2="21" y2="10"></line>
	</svg>
);

const dateFormatter = new Intl.DateTimeFormat('es-ES', {
	day: '2-digit',
	month: '2-digit',
	year: 'numeric',
});

type OrderInfoProps = Omit<OrderEntity, 'lines'>;

export const OrderInfo = memo(({ client, date, id }: OrderInfoProps) => {
	const formattedDate = date ? dateFormatter.format(new Date(date)) : '';

	return (
		<Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
			<TextField
				label="ID"
				value={id}
				slotProps={{ input: { readOnly: true } }}
				size="small"
				sx={{ width: { md: '150px' } }}
			/>
			<TextField
				label="Client"
				value={client}
				slotProps={{ input: { readOnly: true } }}
				size="small"
				fullWidth
			/>
			<TextField
				label="Fecha"
				value={formattedDate} // Ensure this renders as a string safely
				slotProps={{
					input: {
						readOnly: true,
						endAdornment: (
							<InputAdornment position="end">
								<CalendarIcon />
							</InputAdornment>
						),
					},
				}}
				size="small"
				sx={{ width: { md: '200px' } }}
			/>
		</Stack>
	);
});
