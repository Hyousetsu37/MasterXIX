import { LoginForm } from '@features/auth/ui/LoginForm';
import { Box, Container } from '@mui/material';

export const LoginPage: React.FC = () => {
  return (
    // Container ensures the content doesn't stretch too wide on huge monitors
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LoginForm />
      </Box>
    </Container>
  );
};
