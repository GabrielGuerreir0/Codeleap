import { createContext, useState, useContext } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || ""
  );

  const login = (name) => {
    localStorage.setItem("username", name);
    setUsername(name);
  };

  const logout = () => {
    localStorage.removeItem("username");
    setUsername("");
  };

  const isAuthenticated = !!username;
  return (
    <AuthContext.Provider value={{ username, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
