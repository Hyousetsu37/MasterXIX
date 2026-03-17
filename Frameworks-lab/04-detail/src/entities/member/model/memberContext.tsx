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
  const [currentOrg, setCurrentOrg] = useState<string>('');

  const loadOrganization = useCallback(async (orgName: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getOrgMembers(orgName);
      setCurrentOrg(orgName);
      setMembers(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || 'Error loading the Org Members');
      } else {
        setError('There was an unexpected error while loading the Org Members');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadOrganization('lemoncode');
  }, [loadOrganization]);

  const contextValue = useMemo(
    () => ({ members, error, isLoading, loadOrganization, currentOrg }),
    [members, error, isLoading, loadOrganization, currentOrg],
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
