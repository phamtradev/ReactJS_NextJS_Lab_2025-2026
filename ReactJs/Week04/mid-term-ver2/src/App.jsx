import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  const [statusFilter, setStatusFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const jsonData = "/restaurants.json";

  //focus input
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(jsonData);
        if (!res.ok) {
          throw new Error("Fetch failed");
        }
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError("Loading failed...");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //filter by name
  // const searchData = data.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  // );

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchName = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchStatus =
        statusFilter === "all" || item.status === statusFilter;

      const matchPrice =
        priceFilter === "all" || item.priceRange === priceFilter;
      return matchName && matchStatus && matchPrice;
    });
  }, [data, searchTerm, statusFilter, priceFilter]);

  const handleResetFilters = useCallback(() => {
    setSearchTerm("");
    setStatusFilter("all");
    setPriceFilter("all");

    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  if (loading) {
    return <h2>Loading restaurants...</h2>;
  }

  if (error) {
    return <h2>Loading Failed...</h2>;
  }

  return (
    <div className="app">
      <h1>Restaurant Explorer</h1>
      <div className="controls">
        <input
          type="text"
          ref={searchInputRef}
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All status</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="all">All Prices</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>

        <button onClick={handleResetFilters}>Reset filter</button>
      </div>
      <div className="restaurant-grid">
        {filteredData.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} />
            <h3>{item.name}</h3>
            <p>Cuisine: {item.cuisine}</p>
            <p>Rating: {item.rating}</p>
            <p>Price: {item.priceRange}</p>
            <p>Status: {item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
