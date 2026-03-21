import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material';
import { getStatusColor } from '@shared/lib/helperFuncs/getStatusColor';
import type { CharacterListEntity } from '../model/types';
import { generatePath, Link } from 'react-router-dom';

export const CharacterCard = (character: CharacterListEntity) => {
  return (
    <Link
      to={generatePath('/character/detail/:id', { id: character.id })}
      style={{ textDecoration: 'none' }}
    >
      <Card
        sx={{
          maxWidth: 300,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s',
          '&:hover': { transform: 'scale(1.02)', boxShadow: 6 },
        }}
        elevation={3}
      >
        <CardMedia
          component="img"
          height={300}
          image={character.imageUrl}
          alt={`Portrait of ${character.name}`}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            noWrap
            title={character.name}
          >
            {character.name}
          </Typography>
          <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Status:
            </Typography>
            <Chip
              label={character.status}
              size="small"
              color={getStatusColor(character.status)}
              variant="outlined"
              sx={{ fontWeight: 'bold' }}
            />
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};
