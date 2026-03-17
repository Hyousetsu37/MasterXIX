import { useMemberListModel } from '@entities/member/model/memberContext';
import { Search } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import { useState } from 'react';
import styles from './SearchOrganization.module.css';

export const SearchOrganization = () => {
  const { loadOrganization, currentOrg } = useMemberListModel();
  const [searchTerm, setSearchTerm] = useState(currentOrg);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    loadOrganization(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        id="search-bar-input"
        variant="outlined"
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }}
        fullWidth
      />
      <IconButton type="submit" aria-label="search" sx={{ ml: 1 }}>
        <Search />
      </IconButton>
    </form>
  );
};
