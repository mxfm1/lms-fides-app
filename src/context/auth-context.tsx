'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ClientUserData, useSession, ClientDataPresenter } from "@/lib/auth-client";

type AuthContextType = {
  userData: ClientUserData | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  refetchUser: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data, isPending, refetch } = useSession();
  const [userData, setUserData] = useState<ClientUserData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Actualiza el estado cada vez que data cambie
  useEffect(() => {
    if (data) {
      setUserData(ClientDataPresenter(data));
      setIsLoggedIn(true);
    } else {
      setUserData(null);
      setIsLoggedIn(false);
    }
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        userData,
        isLoggedIn,
        isLoading: isPending,
        refetchUser: refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para consumir el contexto
export const useLocalAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
