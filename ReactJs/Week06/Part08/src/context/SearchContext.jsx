import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null,
  });

  const searchAPI = async (keyword) => {
    if (!keyword) {
      setState({ data: [], loading: false, error: null });
      return;
    }

    setState({ data: [], loading: true, error: null });

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );

      const data = await res.json();

      // fake search filter
      const filtered = data.filter((u) =>
        u.name.toLowerCase().includes(keyword.toLowerCase())
      );

      setState({
        data: filtered,
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

  return (
    <SearchContext.Provider value={{ ...state, searchAPI }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);