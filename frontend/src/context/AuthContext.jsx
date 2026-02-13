import { createContext, useContext, useEffect, useState } from "react";
import api from "@/api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await api.get("/api/user");
      setUser(res.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(); // runs on app load / refresh
  }, []);

  const login = async (email, password) => {
    await api.get("/sanctum/csrf-cookie");
    await api.post("/api/login", { email, password });
    await fetchUser();
  };

  const register = async (data) => {
    await api.get("/sanctum/csrf-cookie");
    await api.post("/api/register", data);
    await fetchUser();
  };

  const logout = async () => {
    await api.post("/api/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
