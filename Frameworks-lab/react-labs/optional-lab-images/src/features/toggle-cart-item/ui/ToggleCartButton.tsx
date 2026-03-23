import { useCartModel } from '@entities/cart/model/cartContext';
import { Checkbox, FormControlLabel } from '@mui/material';

export const ToggleCartButton = ({ pictureId }: { pictureId: string }) => {
	const { selectedIds, toggleCartItem } = useCartModel();
	const isSelected = selectedIds.includes(pictureId);

	return (
		<FormControlLabel
			control={
				<Checkbox checked={isSelected} onChange={() => toggleCartItem(pictureId)} color="primary" />
			}
			label="Buy"
		/>
	);
};
