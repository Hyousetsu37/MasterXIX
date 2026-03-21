import { baseCharacter } from '@shared/api/baseCharacter';
import { singleCharacterMapper } from '../lib/characterDetailMapper';
import type { CharacterDto, CharacterDetailEntity } from '../model/types';

export const getSingleCharacter = async (
  id: string,
): Promise<CharacterDetailEntity> => {
  const response = await baseCharacter<CharacterDto>(`/character/${id}`, {
    method: 'GET',
  });
  return singleCharacterMapper(response);
};
