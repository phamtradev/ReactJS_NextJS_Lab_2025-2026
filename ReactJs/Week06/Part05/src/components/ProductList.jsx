import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Áo", price: 100 },
  { id: 2, name: "Quần", price: 200 },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Sản phẩm</h2>
      {products.map((p) => (
        <div key={p.id}>
          <span>
            {p.name} - {p.price}$
          </span>
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}
    </div>
  );
}