import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getOrgMembers } from '../api/getOrgMembers';
import type { MemberContextValue, MemberListEntity } from './type';

const MemberContext = createContext<MemberContextValue | null>(null);
interface MemberProviderProps {
  children: ReactNode;
}
export const MemberListProvider = ({ children }: MemberProviderProps) => {
  const [members, setMembers] = useState<MemberListEntity[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentOrg, setCurrentOrg] = useState('');
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [hasMoreMembers, setHasMoreMembers] = useState(true);

  const loadOrganization = useCallback(
    async (orgName: string, targetPage = 0, targetPerPage = 5) => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getOrgMembers(
          orgName,
          targetPage + 1,
          targetPerPage,
        );
        setCurrentOrg(orgName);
        setMembers(data);
        setPage(targetPage);
        setPerPage(targetPerPage);
        setHasMoreMembers(data.length === targetPerPage);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message || 'Error loading the Org Members');
        } else {
          setError(
            'There was an unexpected error while loading the Org Members',
          );
        }
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const changePerPage = useCallback(
    (newPerPage: number) => {
      loadOrganization(currentOrg, 0, newPerPage);
    },
    [currentOrg, loadOrganization],
  );
  const changePage = useCallback(
    (newPage: number) => {
      loadOrganization(currentOrg, newPage, perPage);
    },
    [currentOrg, loadOrganization, perPage],
  );

  useEffect(() => {
    loadOrganization('lemoncode');
  }, [loadOrganization]);

  const contextValue = useMemo(
    () => ({
      members,
      error,
      isLoading,
      loadOrganization,
      currentOrg,
      page,
      perPage,
      changePage,
      changePerPage,
      hasMoreMembers,
    }),
    [
      members,
      error,
      isLoading,
      loadOrganization,
      currentOrg,
      page,
      perPage,
      changePage,
      changePerPage,
      hasMoreMembers,
    ],
  );

  return (
    <MemberContext.Provider value={contextValue}>
      {children}
    </MemberContext.Provider>
  );
};

export const useMemberListModel = () => {
  const context = useContext(MemberContext);
  if (!context) {
    throw new Error(
      `The useMemberListModel has to be user inside a MemberListProvider`,
    );
  }
  return context;
};
