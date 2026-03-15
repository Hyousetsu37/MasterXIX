import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import type { SessionContextValue, User } from './types';

const SessionContext = createContext<SessionContextValue | null>(null);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = user != null;

  const login = useCallback(async (user: User) => {
    setIsLoading(true);
    setError(null);
    try {
      if (!user.username.trim()) {
        throw new Error('El nombre de usuario no puede estar vacio');
      }

      if (user.username === 'admin' && user.password === 'test') {
        setUser({
          username: user.username,
          password: user.password,
        });
      } else {
        throw new Error('Usuario o Contraseña incorrectos');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Ocurrio un error inesperado al inicias sesion');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <SessionContext.Provider
      value={{ user, isAuthenticated, isLoading, error, login, logout }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionModel = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSessionModel debe usarse dentro de un SessionProvider');
  }
  return context;
};
