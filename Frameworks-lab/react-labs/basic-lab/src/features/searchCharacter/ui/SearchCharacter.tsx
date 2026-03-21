import { useCharacterModel } from '@entities/character/model/characterContext';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { SearchBar } from '@shared/ui/searchbar/SearchBar';
import { useEffect, useState } from 'react';

export const SearchCharacter = () => {
  const { loadCharacter, searchedCharacter } = useCharacterModel();
  const [searchQuery, setSearchQuery] = useState(searchedCharacter);
  const debounceSearchTerm = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debounceSearchTerm !== searchedCharacter) {
      loadCharacter(debounceSearchTerm);
    }
  }, [loadCharacter, debounceSearchTerm, searchedCharacter]);

  useEffect(() => {
    setSearchQuery(searchedCharacter);
  }, [searchedCharacter]);

  return (
    <SearchBar
      onSearch={loadCharacter}
      onSearchChange={setSearchQuery}
      searchTerm={searchQuery}
    />
  );
};
