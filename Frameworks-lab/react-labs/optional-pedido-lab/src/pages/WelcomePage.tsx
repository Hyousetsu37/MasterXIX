import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Stack,
	Typography,
} from '@mui/material';
import { Link } from 'react-router';

const availableOrders = [
	{ id: 'PED-001', title: 'Proveedor Tecnológico', description: 'Reactivos y maquinaria' },
	{ id: 'PED-002', title: 'Suministros Generales', description: 'Material de oficina y papelería' },
	{ id: 'PED-003', title: 'Equipamiento', description: 'Dispositivos y periféricos' },
];

export const WelcomePage = () => {
	return (
		<Container maxWidth="md" sx={{ py: 8 }}>
			<Box textAlign="center" mb={6}>
				<Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
					Gestión de Pedidos - React Lab
				</Typography>
				<Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
					Una aplicación de prueba implementando Feature-Sliced Design (FSD), optimización de
					renderizados con React.memo y manejo de estado avanzado.
				</Typography>
			</Box>

			<Stack
				spacing={3}
				direction={{ xs: 'column', md: 'row' }}
				justifyContent="center"
				alignItems="stretch"
			>
				{availableOrders.map((order) => (
					<Card
						key={order.id}
						variant="outlined"
						sx={{
							flex: 1,
							display: 'flex',
							flexDirection: 'column',
							transition: 'transform 0.2s ease-in-out',
							'&:hover': {
								transform: 'translateY(-4px)',
								boxShadow: 3,
								borderColor: 'primary.main',
							},
						}}
					>
						<CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
							<Typography variant="h5" component="div" fontWeight="bold" gutterBottom>
								{order.id}
							</Typography>
							<Typography variant="subtitle2" color="primary" gutterBottom>
								{order.title}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{order.description}
							</Typography>
						</CardContent>
						<CardActions sx={{ justifyContent: 'center', pb: 3 }}>
							<Button
								component={Link}
								to={`/orders/${order.id}`}
								variant="contained"
								disableElevation
								sx={{ fontWeight: 'bold' }}
							>
								Ver Detalles
							</Button>
						</CardActions>
					</Card>
				))}
			</Stack>
		</Container>
	);
};
