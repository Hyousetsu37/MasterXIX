import { appRoutes } from '@app/providers/appRoutes.routes';
import { Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

export const WelcomePage = () => {
	const navigate = useNavigate();

	return (
		<Container maxWidth="md" sx={{ mt: 10, textAlign: 'center' }}>
			<Typography variant="h2" component="h1" gutterBottom fontWeight="bold" color="primary.main">
				Welcome to the Image Marketplace
			</Typography>

			<Typography
				variant="h5"
				color="text.secondary"
				component={'p'}
				sx={{ mb: 6, lineHeight: 1.6 }}
			>
				Your one-stop shop for the cutest digital companions. We specialize in high-quality, curated
				images of adorable kitties and playful puppies.
				<br />
				Choose your favorite side to get started!
			</Typography>

			<Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
				<Button
					variant="contained"
					color="primary"
					size="large"
					onClick={() => navigate(appRoutes.kitties)}
					sx={{ px: 5, py: 1.5, fontSize: '1.2rem', borderRadius: 2 }}
				>
					Browse Kitties
				</Button>

				<Button
					variant="contained"
					color="secondary"
					size="large"
					onClick={() => navigate(appRoutes.puppies)}
					sx={{
						px: 5,
						py: 1.5,
						fontSize: '1.2rem',
						borderRadius: 2,
						color: 'background.default',
					}}
				>
					Browse Puppies
				</Button>
			</Stack>
		</Container>
	);
};
