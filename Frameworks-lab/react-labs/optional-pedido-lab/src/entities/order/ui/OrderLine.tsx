import { Checkbox, TableCell, TableRow, TextField } from '@mui/material';
import { type ChangeEvent, memo, useEffect, useState } from 'react';
import type { LineEntity } from '../model/type';

interface OrderLineProps {
	orderline: LineEntity;
	isChecked: boolean;
	toggleCheckbox: (id: string) => void;
	changeLineAmount: (id: string, amount: number) => void;
}

export const OrderLine = memo(
	({ orderline, isChecked, toggleCheckbox, changeLineAmount }: OrderLineProps) => {
		const [amount, setAmount] = useState(String(orderline.amount));

		useEffect(() => {
			setAmount(String(orderline.amount));
		}, [orderline]);

		const handleCheckboxChange = () => {
			toggleCheckbox(orderline.id);
		};

		const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
			setAmount(event.currentTarget.value);
		};

		const handleBlur = () => {
			if (!Number.isNaN(amount) && amount !== '') {
				changeLineAmount(orderline.id, Number(amount) ?? 0);
			} else {
				setAmount(String(orderline.amount));
			}
		};

		return (
			<TableRow
				hover
				selected={isChecked}
				sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
			>
				<TableCell padding="checkbox">
					<Checkbox checked={isChecked} onChange={handleCheckboxChange} color="primary" />
				</TableCell>
				<TableCell>{orderline.state}</TableCell>
				<TableCell>{orderline.description}</TableCell>
				<TableCell align="right">
					<TextField
						variant="standard"
						type="number"
						onChange={handleAmountChange}
						onBlur={handleBlur}
						value={amount}
						slotProps={{
							input: {
								style: { textAlign: 'right' },
							},
						}}
					/>
				</TableCell>
			</TableRow>
		);
	},
);
