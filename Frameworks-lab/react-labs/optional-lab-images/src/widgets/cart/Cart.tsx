import { appRoutes } from '@app/providers/appRoutes.routes';
import { useCartModel } from '@entities/cart/model/cartContext';
import { CartRow } from '@entities/cart/ui/CartRow';
import { usePictureModel } from '@entities/picture/model/pictureContext';
import { Box, Button, Divider, List, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useNavigate } from 'react-router';

export const Cart = () => {
	const { selectedIds, toggleCartItem, onEmptyBasket, onToggle } = useCartModel();
	const { pictures } = usePictureModel();
	const navigate = useNavigate();

	const picturesInCart = useMemo(() => {
		return pictures.filter((picture) => selectedIds.includes(picture.id));
	}, [selectedIds, pictures]);

	const handleCheckoutClick = () => {
		onToggle();
		navigate(appRoutes.checkout);
	};

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
				<>
					<List disablePadding sx={{ flexGrow: 1, overflowY: 'auto' }}>
						{picturesInCart.map((item) => (
							<CartRow key={item.id} item={item} onDelete={toggleCartItem} />
						))}
					</List>
					<Box sx={{ pt: 2, mt: 'auto' }}>
						<Button
							variant="contained"
							color="primary"
							fullWidth
							size="large"
							onClick={handleCheckoutClick}
						>
							Go to Checkout
						</Button>
					</Box>
				</>
			)}
		</Box>
	);
};
