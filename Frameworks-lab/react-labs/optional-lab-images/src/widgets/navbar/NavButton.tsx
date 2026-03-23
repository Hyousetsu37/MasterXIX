import { Button, type ButtonProps } from '@mui/material';
import { NavLink } from 'react-router';

type NavButtonProps = ButtonProps<typeof NavLink>;

export const NavButton = ({ children, to, ...rest }: NavButtonProps) => {
	return (
		<Button
			component={NavLink}
			to={to}
			sx={{
				color: 'text.primary',
				'&:hover': {
					color: 'secondary.main',
					backgroundColor: 'rgba(155, 246, 255, 0.08)',
				},
				'&.active': {
					color: 'primary.main',
					fontWeight: 'bold',
				},
			}}
			{...rest}
		>
			{children}
		</Button>
	);
};
