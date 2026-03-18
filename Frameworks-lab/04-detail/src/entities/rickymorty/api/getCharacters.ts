import { baseCharacter } from '@shared/api/baseCharacter';
import type { APIResponse, CharacterEntity } from '../model/types';
import { characterMapper } from '../lib/characterMapper';

interface getCharacterAgs {
  page: number;
  characterName?: string;
}

export const getCharacters = async ({
  page,
  characterName,
}: getCharacterAgs): Promise<CharacterEntity[]> => {
  const queryParams = new URLSearchParams();
  if (characterName) {
    queryParams.append('name', characterName);
  }
  queryParams.append('page', page.toString());
  const endpoint = `/character/?${queryParams.toString()}`;
  const rawData = await baseCharacter<APIResponse>(endpoint.toString(), {
    method: 'GET',
  });
  const rawCharacters = rawData.results;
  return characterMapper(rawCharacters);
};
