import { baseCharacter } from '@shared/api/baseCharacter';
import type {
  APIResponse,
  APIResponseInfo,
  CharacterListEntity,
} from '../model/types';
import { characterMapper } from '../lib/characterListMapper';

interface getCharacterAgs {
  page: number;
  characterName?: string;
}

export const getCharacters = async ({
  page,
  characterName,
}: getCharacterAgs): Promise<{
  characterEntities: CharacterListEntity[];
  info: APIResponseInfo;
}> => {
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
  const rawInfo = rawData.info;
  return { characterEntities: characterMapper(rawCharacters), info: rawInfo };
};
