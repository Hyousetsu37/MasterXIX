export interface User {
  username: string;
  password: string;
}

export interface SessionContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (user: User) => Promise<void>;
  logout: () => void;
}
