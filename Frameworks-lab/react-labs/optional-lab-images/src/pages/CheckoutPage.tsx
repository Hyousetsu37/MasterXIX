import { appRoutes } from '@app/providers/appRoutes.routes';
import { useCartModel } from '@entities/cart/model/cartContext';
import { usePictureModel } from '@entities/picture/model/pictureContext';
import {
	Alert,
	Box,
	Button,
	Container,
	Divider,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

export const CheckoutPage = () => {
	const { selectedIds, onEmptyBasket } = useCartModel();
	const { pictures } = usePictureModel();
	const [isSuccess, setIsSuccess] = useState(false);
	const picturesOnCheckout = useMemo(() => {
		return pictures.filter((picture) => selectedIds.includes(picture.id));
	}, [selectedIds, pictures]);
	const navigate = useNavigate();

	const handleConfirmPurchase = () => {
		onEmptyBasket();
		setIsSuccess(true);

		setTimeout(() => {
			navigate(appRoutes.kitties);
		}, 3000);
	};

	if (isSuccess) {
		return (
			<Container maxWidth="sm" sx={{ mt: 8, textAlign: 'center' }}>
				<Alert severity="success" sx={{ mb: 3 }}>
					Purchase successful! Enjoy your new digital friends.
				</Alert>
				<Typography variant="body2" color="text.secondary">
					Redirecting you back to the marketplace...
				</Typography>
			</Container>
		);
	}

	return (
		<Container maxWidth="md" sx={{ mt: 6 }}>
			<Typography variant="h4" gutterBottom fontWeight="bold">
				Checkout Review
			</Typography>
			<Divider sx={{ mb: 4 }} />

			{picturesOnCheckout.length === 0 ? (
				<Box sx={{ textAlign: 'center', py: 8 }}>
					<Typography variant="h6" color="text.secondary" gutterBottom>
						Your cart is totally empty!
					</Typography>
					<Button variant="outlined" onClick={() => navigate(appRoutes.kitties)} sx={{ mt: 2 }}>
						Go Browse
					</Button>
				</Box>
			) : (
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
					<List disablePadding>
						{picturesOnCheckout.map((pic) => (
							<ListItem key={pic.id} sx={{ bgcolor: 'background.paper', mb: 1, borderRadius: 1 }}>
								<ListItemText primary={pic.title} secondary={`ID: ${pic.id}`} />
							</ListItem>
						))}
					</List>

					<Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
						<Button
							variant="contained"
							color="primary"
							size="large"
							onClick={handleConfirmPurchase}
						>
							Confirm Purchase ({picturesOnCheckout.length} items)
						</Button>
					</Box>
				</Box>
			)}
		</Container>
	);
};
