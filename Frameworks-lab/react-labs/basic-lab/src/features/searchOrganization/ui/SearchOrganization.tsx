import { useMemberListModel } from '@entities/member/model/memberContext';
import { SearchBar } from '@shared/ui/searchbar/SearchBar';
import { useEffect, useState } from 'react';

export const SearchOrganization = () => {
  const { loadOrganization, currentOrg } = useMemberListModel();
  const [searchTerm, setSearchTerm] = useState(currentOrg);

  useEffect(() => {
    setSearchTerm(currentOrg);
  }, [currentOrg]);

  return (
    <SearchBar
      onSearch={loadOrganization}
      onSearchChange={setSearchTerm}
      searchTerm={searchTerm}
    />
  );
};
