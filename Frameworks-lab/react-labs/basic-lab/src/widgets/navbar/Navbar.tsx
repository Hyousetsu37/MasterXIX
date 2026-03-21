import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { NavButton } from './NavButton';

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar>
        <Typography
          component="div"
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          React Laboratory
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <NavButton to={'/characters'}>Characters</NavButton>
          <NavButton to={'/members'}>Members</NavButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
