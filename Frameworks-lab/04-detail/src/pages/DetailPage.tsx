import { Box, Button, Typography } from '@mui/material';
import { MemberDetailsWidget } from '@widgets/memberProfile';
import { useNavigate, useParams } from 'react-router-dom';

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4, maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Detail Page
      </Typography>
      <MemberDetailsWidget id={id} />
      <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>
        Back to List page
      </Button>
    </Box>
  );
};
