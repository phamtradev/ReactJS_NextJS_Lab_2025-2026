import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null,
  });

  const fetchUsers = async () => {
    setState({ data: [], loading: true, error: null });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("Fetch failed");
      }

      const data = await res.json();

      setState({
        data,
        loading: false,
        error: null,
      });
    } catch (err) {
      setState({
        data: [],
        loading: false,
        error: err.message,
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ ...state, refetch: fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);