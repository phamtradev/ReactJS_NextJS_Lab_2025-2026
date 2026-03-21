import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const jsonData = "/data.json";

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(jsonData);
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  const categories = useMemo(() => {
    return [...new Set(data.map((item) => item.category))];
  }, [data]);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const matchCategory =
        !selectedCategory || item.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [data, searchValue, selectedCategory]);

  return (
    <>
      {/* Search */}
      <input
        type="text"
        value={searchValue}
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {/* Select */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Render */}
      {filteredData.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.desc}</p>
        </div>
      ))}
    </>
  );
}

export default App;
