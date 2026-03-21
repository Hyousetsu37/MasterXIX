import { IconButton, InputAdornment, SvgIcon, TextField } from '@mui/material';
import styles from './SearchBar.module.css';

function CustomSearchIcon() {
  return (
    <SvgIcon>
      {/* This is the official Material Design search icon path */}
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </SvgIcon>
  );
}

interface SearchBarProps {
  onSearchChange: (newSearchTerm: string) => void;
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
}

export const SearchBar = ({
  onSearchChange,
  searchTerm,
  onSearch,
}: SearchBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formStyle}>
      <TextField
        id="search-bar-input"
        variant="outlined"
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '15px' } }}
        fullWidth
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  aria-label="search"
                  edge="end"
                  sx={{ ml: 1 }}
                >
                  <CustomSearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </form>
  );
};
