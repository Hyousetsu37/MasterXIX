import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import { getStatusColor } from '@shared/lib/helperFuncs/getStatusColor';
import type { CharacterDetailEntity } from '../model/types';

export const CharacterDetailCard = (character: CharacterDetailEntity) => {
  return (
    <Card
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        borderRadius: 4,
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: '100%', sm: 300 },
          height: { xs: 300, sm: 'auto' },
          objectFit: 'cover',
        }}
        image={character.imageUrl}
        alt={character.name}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            {character.name}
          </Typography>
          <Chip
            label={character.status}
            color={getStatusColor(character.status)}
            variant="outlined"
            size="medium"
            sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}
          />
        </Box>

        <Stack spacing={2} sx={{ mt: 2 }}>
          <Box>
            <Typography
              variant="overline"
              color="text.secondary"
              display="block"
            >
              Species
            </Typography>
            <Typography variant="h6">{character.species}</Typography>
          </Box>

          <Box>
            <Typography
              variant="overline"
              color="text.secondary"
              display="block"
            >
              Last Known Location
            </Typography>
            <Typography variant="h6">{character.location}</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
