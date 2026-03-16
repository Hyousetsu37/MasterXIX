import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { getOrganizationMembers } from '../api/getOrganizationMembers';
import { getSingleUser } from '../api/getSingleMember';
import type { Member, MemberContextValue } from './types';

const MemberContext = createContext<MemberContextValue | null>(null);

export const MemberProvider = ({ children }: { children: ReactNode }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentOrg, setCurrentOrg] = useState<string | null>(null);

  const loadOrganization = useCallback(async (orgName: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getOrganizationMembers(orgName);
      setCurrentOrg(orgName);
      setMembers(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Error cargando la Organizacion');
      } else {
        setError('Ocurrio un error inesperado al cargar la informacion');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getUserFromCacheOrApi = useCallback(
    async (username: string) => {
      const cachedMembers = members.find(
        (member) => member.login.toLowerCase() === username.toLowerCase(),
      );
      if (cachedMembers) {
        return cachedMembers;
      }

      setIsLoading(true);
      try {
        const data = await getSingleUser(username);
        return data;
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Usuario no encontrado');
        }
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [members],
  );

  return (
    <MemberContext.Provider
      value={{
        members,
        isLoading,
        error,
        loadOrganization,
        getUserFromCacheOrApi,
        currentOrg,
      }}
    >
      {children}
    </MemberContext.Provider>
  );
};

export const useMemberModel = () => {
  const context = useContext(MemberContext);
  if (!context) {
    throw new Error('useMemberModel debe usarse dentro de un MemberProvider');
  }
  return context;
};
