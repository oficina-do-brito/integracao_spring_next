import { useState, createContext } from "react";
const authUser = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const ContextoGlobalUser = createContext();

export default function CContext({ children }) {
  const [estado, setEstado] = useState(authUser);

  return (
    <ContextoGlobalUser.Provider value={{ estado, setEstado }}>
      {children}
    </ContextoGlobalUser.Provider>
  );
}
