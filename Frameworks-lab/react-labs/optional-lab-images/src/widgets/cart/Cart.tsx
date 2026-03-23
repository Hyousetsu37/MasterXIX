import { Button, Box, Divider, List, Typography } from '@mui/material';
import { useCartModel } from '@entities/cart/model/cartContext';
import { CartRow } from '@entities/cart/ui/CartRow';

export const Cart = () => {
	const { picturesInCart, onDeletePicture, onEmptyBasket } = useCartModel();

	return (
		<Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
					Selected Images
				</Typography>
				<Button onClick={onEmptyBasket}>Vaciar Carrito</Button>
			</Box>
			<Divider sx={{ mb: 2, borderColor: 'divider' }} />

			{picturesInCart.length === 0 ? (
				<Box
					sx={{
						flexGrow: 1,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
					}}
				>
					<Typography color="text.secondary">
						Your cart is empty. <br /> Select some kitties or puppies to get started!
					</Typography>
				</Box>
			) : (
				<List disablePadding sx={{ flexGrow: 1, overflowY: 'auto' }}>
					{picturesInCart.map((item) => (
						<CartRow key={item.id} item={item} onDelete={onDeletePicture} />
					))}
				</List>
			)}
		</Box>
	);
};
