import { useMemberModel } from '@entities/member/model/memberContext';
import { useDebounce } from '@shared/lib/hooks';
import { Button } from '@shared/ui/button/Button';
import { ErrorDisplay } from '@shared/ui/error-display/ErrorDisplay';
import { Input } from '@shared/ui/input';
import { useEffect, useState } from 'react';
import style from './SearchOrganization.module.css';

export const SearchOrganization = () => {
  const [searchTerm, setSearchTerm] = useState('lemoncode');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { loadOrganization, isLoading, error } = useMemberModel();

  useEffect(() => {
    if (debouncedSearchTerm.trim()) {
      loadOrganization(debouncedSearchTerm.trim());
    }
  }, [loadOrganization, debouncedSearchTerm]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      loadOrganization(searchTerm.trim());
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };
  return (
    <div className={style.searchContainer}>
      <form onSubmit={handleSubmit} className={style.formGroup}>
        <div className={style.inputWrapper}>
          <Input
            id="orgSearch"
            type="text"
            value={searchTerm}
            placeholder="Busca tu organizacion"
            onChange={handleChange}
          />
        </div>
        <div className={style.buttonWrapper}>
          <Button type="submit">Buscar</Button>
        </div>
        {isLoading && <span>Buscando...</span>}
      </form>
      {error && <ErrorDisplay errorMessage={error} />}
    </div>
  );
};
