import type { CharacterDetailEntity, CharacterDto } from '../model/types';

export const singleCharacterMapper = (
  character: CharacterDto,
): CharacterDetailEntity => {
  return {
    id: character?.id.toString() ?? '',
    imageUrl: character.image ?? '',
    name: character.name ?? '',
    status: character.status ?? 'unknown',
    location: character.location.name ?? 'unknown',
    species: character.species ?? 'string',
  };
};
