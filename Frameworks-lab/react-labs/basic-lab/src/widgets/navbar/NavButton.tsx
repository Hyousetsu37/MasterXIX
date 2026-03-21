import { Button, type ButtonProps } from '@mui/material';
import { NavLink } from 'react-router-dom';

type NavButtonProps = ButtonProps<typeof NavLink>;

export const NavButton = ({ to, children, ...rest }: NavButtonProps) => {
  return (
    <Button
      component={NavLink}
      to={to}
      sx={{
        color: 'white',
        '&.active': {
          backgroundColor: 'rgba(255,255,255,0.15)',
          fontWeight: 'bold',
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
