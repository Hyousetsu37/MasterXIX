import { Box, Typography } from '@mui/material';
import { CharacterProfileWidget } from '@widgets/characterProfile/CharacterDetailWidget';
import { useParams } from 'react-router-dom';

export const CharacterDetailPage = () => {
  const { id } = useParams();
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography component={'h2'} variant="h2">
        Detail page
      </Typography>
      <CharacterProfileWidget id={id} />
    </Box>
  );
};
