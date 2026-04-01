import { useOrderDispatchModel, useOrderStateModel } from '@entities/order/model/OrderContext';
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { OrderLine } from '@entities/order/ui/OrderLine';

export const OrdersList = () => {
	const { orderInfo, selectedLines } = useOrderStateModel();
	const { toggleCheckbox, changeLineAmount } = useOrderDispatchModel();

	const { lines } = orderInfo;

	return (
		<TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
			<Table size="small">
				<TableHead sx={{ backgroundColor: 'action.hover' }}>
					<TableRow>
						<TableCell padding="checkbox"></TableCell>
						<TableCell sx={{ fontWeight: 'bold' }}>Estado</TableCell>
						<TableCell sx={{ fontWeight: 'bold' }}>Descripción</TableCell>
						<TableCell align="right" sx={{ fontWeight: 'bold' }}>
							Importe
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{lines.map((line) => {
						const isChecked = selectedLines.includes(line.id);
						return (
							<OrderLine
								key={line.id}
								orderline={line}
								isChecked={isChecked}
								toggleCheckbox={toggleCheckbox}
								changeLineAmount={changeLineAmount}
							/>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
