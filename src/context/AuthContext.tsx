import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getStoredPhone, storePhone, clearPhone } from '@/lib/auth';

interface AuthContextValue {
  phone: string | null;
  isLoading: boolean;
  login: (phone: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [phone, setPhone] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPhone(getStoredPhone());
    setIsLoading(false);
  }, []);

  function login(p: string) {
    storePhone(p);
    setPhone(p);
  }

  function logout() {
    clearPhone();
    setPhone(null);
  }

  return (
    <AuthContext.Provider value={{ phone, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
