import { Typography } from '@mui/material';
import { CharacterListWidget } from '@widgets/characterList/ui/CharacterList';

export const CharacterListPage = () => {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Typography variant="h1" component="h2">
        Rick and Morty Character Directory
      </Typography>
      <CharacterListWidget />
    </main>
  );
};
