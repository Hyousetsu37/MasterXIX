import { useOrderDispatchModel, useOrderStateModel } from '@entities/order/model/OrderContext';
import { Button, Stack } from '@mui/material';

export const ToggleLine = () => {
	const { selectedLines } = useOrderStateModel();
	const { changeLineState } = useOrderDispatchModel();
	const hasSelection = selectedLines.length > 0;

	const handleOnValidate = () => changeLineState('Valido');
	const handleOnInvalidate = () => changeLineState('Pendiente');

	return (
		<Stack direction="row" spacing={2}>
			<Button
				variant="contained"
				color="success"
				onClick={handleOnValidate}
				disabled={!hasSelection}
				disableElevation
			>
				Validar
			</Button>
			<Button
				variant="outlined"
				color="error"
				onClick={handleOnInvalidate}
				disabled={!hasSelection}
			>
				Invalidar
			</Button>
		</Stack>
	);
};
