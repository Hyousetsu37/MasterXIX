import { getSingleCharacter } from '@entities/character/api/getSingleCharacter';
import type { CharacterDetailEntity } from '@entities/character/model/types';
import { CharacterDetailCard } from '@entities/character/ui/CharacterDetailCard';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  SvgIcon,
  type SvgIconProps,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BackArrowIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </SvgIcon>
  );
}

interface CharacterProfileWidgetProps {
  id: string | undefined;
}

export const CharacterProfileWidget = ({ id }: CharacterProfileWidgetProps) => {
  const navigate = useNavigate();

  const [character, setCharacter] = useState<CharacterDetailEntity | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        if (id) {
          const characterInfo = await getSingleCharacter(id);
          setCharacter(characterInfo);
        }
      } catch (error) {
        console.error('Failed to fetch character', error);
        setCharacter(null);
      } finally {
        setIsLoading(false);
      }
    };
    asyncFunc();
  }, [id]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!character || !id) {
    return (
      <Box sx={{ p: 4, maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
        <Alert severity="warning" sx={{ mb: 3 }}>
          Character not found or failed to load
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', width: '100%' }}>
      <Button
        startIcon={<BackArrowIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        Back to Directory
      </Button>
      <CharacterDetailCard {...character} />
    </Box>
  );
};
