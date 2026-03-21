import type { CharacterDto, CharacterListEntity } from '../model/types';

export const characterMapper = (
  characterList: CharacterDto[],
): CharacterListEntity[] => {
  if (!Array.isArray(characterList)) {
    console.warn(
      'characterMapper expected an array but received: ',
      characterList,
    );
    return [];
  }
  return characterList.map((character) => ({
    id: character?.id.toString() ?? '',
    imageUrl: character.image ?? '',
    name: character.name ?? '',
    status: character.status ?? 'unknown',
  }));
};
