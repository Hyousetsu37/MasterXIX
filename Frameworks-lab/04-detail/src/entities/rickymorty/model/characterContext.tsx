import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getCharacters } from '../api/getCharacters';
import type { CharacterContextValues, CharacterEntity } from './types';

const characterContext = createContext<CharacterContextValues | null>(null);

interface CharacterListProviderProps {
  children: ReactNode;
}

export const CharacterListProvider = ({
  children,
}: CharacterListProviderProps) => {
  const [characters, setCharacters] = useState<CharacterEntity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchedCharacter, setSearchedCharacter] = useState<
    string | undefined
  >(undefined);

  const loadCharacter = useCallback(
    async (characterName?: string, targetPage = 0) => {
      try {
        setIsLoading(true);
        setSearchedCharacter(characterName);
        const data = await getCharacters({
          page: targetPage + 1,
          characterName: characterName,
        });
        setCharacters(data);
        setPage(targetPage);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message || 'Error loading the Org Members');
        } else {
          console.error(
            'There was an unexpected error while loading the Org Members',
          );
        }
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    loadCharacter(searchedCharacter);
  }, [searchedCharacter, loadCharacter]);

  const changePage = useCallback(
    (newPage: number) => {
      loadCharacter(searchedCharacter, newPage);
    },
    [loadCharacter, searchedCharacter],
  );

  return (
    <characterContext.Provider
      value={useMemo(
        () => ({
          changePage,
          characters,
          isLoading,
          loadCharacter,
          page,
          searchedCharacter,
        }),
        [
          changePage,
          characters,
          isLoading,
          loadCharacter,
          page,
          searchedCharacter,
        ],
      )}
    >
      {children}
    </characterContext.Provider>
  );
};

export const useCharacterModel = () => {
  const context = useContext(characterContext);
  if (!context) {
    throw new Error(
      'useCharacterContext needs to be used inside a CharacterListContext Provider',
    );
  }
  return context;
};
