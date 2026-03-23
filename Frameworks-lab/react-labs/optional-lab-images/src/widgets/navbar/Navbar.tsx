import { appRoutes } from '@app/providers/appRoutes.routes';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { NavButton } from './NavButton';
import { ShowCartButton } from './ShowCartButton';

export const Navbar = () => {
	return (
		<AppBar position="sticky" elevation={0}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								fontWeight: 700,
								letterSpacing: '.1rem',
								color: 'text.primary',
								textDecoration: 'none',
								'&:hover': {
									color: 'primary.main',
								},
								transition: 'color 0.3s ease',
							}}
						>
							Optional Image Marketplace
						</Typography>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: 'flex', gap: 2 }}>
						<NavButton to={appRoutes.kitties}>Kitties</NavButton>
						<NavButton to={appRoutes.puppies}>Puppies</NavButton>
						<ShowCartButton />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
