import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  const [statusFilter, setStatusFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const jsonData = "/restaurants.json";

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

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
        setError("Cannot load restaurants");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  // Dùng useCallback để tránh tạo lại hàm mỗi lần component re-render
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
    return <h2>{error}</h2>;
  }

  return (
    <div className="app">
      <h1>Restaurant Explorer</h1>

      <div className="controls">
        <input
          type="text"
          ref={searchInputRef}
          placeholder="Search by restaurant name..."
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

        <button onClick={handleResetFilters}>Reset Filters</button>
      </div>

      <div className="restaurant-grid">
        {filteredData.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
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
}

export default App;
