import React, { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create context
const AuthContext = createContext();

// 2️⃣ Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};

// 3️⃣ Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Refresh safe login
  useEffect(() => {
    const storedUser = localStorage.getItem("shiksharthiUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("shiksharthiUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("shiksharthiUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};