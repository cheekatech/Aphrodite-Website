import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    setUser((prev) => prev || { email, name: email.split("@")[0] });
  };

  const signup = (profileData) => {
    setUser({
      ...profileData,
      profileImage: null,
    });
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }));
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, updateProfile, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}