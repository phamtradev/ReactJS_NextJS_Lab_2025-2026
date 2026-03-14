import { useState, useMemo } from "react";
import { generateProducts } from "./utils/products";

const allProducts = generateProducts(5000);

function ProductFilter() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  console.time("Filtered Products Render");

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const matchesName = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesMin = minPrice === "" || p.price >= parseFloat(minPrice);
      const matchesMax = maxPrice === "" || p.price <= parseFloat(maxPrice);
      return matchesName && matchesMin && matchesMax;
    });
  }, [search, minPrice, maxPrice]);

  // useMemo tính tổng tiền
  const totalPrice = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  console.timeEnd("Filtered Products Render");

  return (
    <div>
      <h1>Product Filter</h1>

      <div>
        <input
          type="text"
          placeholder="Search name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <h2>Total Price: {totalPrice}</h2>

      <ul>
        {filteredProducts.slice(0, 20).map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>

      {filteredProducts.length > 20 && <p>And {filteredProducts.length - 20} more...</p>}
    </div>
  );
}

export default ProductFilter;