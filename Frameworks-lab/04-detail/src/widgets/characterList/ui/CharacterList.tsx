import { useCharacterModel } from '@entities/rickymorty/model/characterContext';
import { CharacterCard } from '@entities/rickymorty/ui/CharacterCard';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';

export const CharacterListWidget = () => {
  const { characters, isLoading, page, changePage } = useCharacterModel();

  return (
    <Box sx={{ width: '100%', maxWidth: 1200, margin: '0 auto', p: 3 }}>
      {/* 1. The Search Feature */}
      {/* <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <SearchCharacter />
      </Box> */}

      {/* 2. Loading State */}
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '50vh',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : characters.length === 0 ? (
        /* 3. Empty State */
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mt: 5 }}
        >
          No characters found in this dimension.
        </Typography>
      ) : (
        /* 4. The Data Grid & Pagination */
        <>
          {/* spacing={3} adds consistent gaps between all cards */}
          <Grid container spacing={3}>
            {characters.map((char) => (
              // The responsive magic happens here!
              // xs=12 (1 card/row on mobile)
              // sm={6} (2 cards/row on tablets)
              // md={4} (3 cards/row on small laptops)
              // lg={3} (4 cards/row on desktops)
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={char.id}>
                <CharacterCard {...char} />
              </Grid>
            ))}
          </Grid>

          {/* Pagination Controls */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mt: 5,
              mb: 2,
            }}
          >
            <Button
              variant="outlined"
              disabled={page === 0}
              onClick={() => changePage(page - 1)}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              // Note: The Rick and Morty API sends back a total page count in `info.pages`.
              // To make this 'Next' button disable at the end, you would need to add
              // that total to your Context and check it here!
              onClick={() => changePage(page + 1)}
            >
              Next
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
