import "./ProductList.css";

const products = [
  { id: 1, name: "Product 1", price: "100.000 VND" },
  { id: 2, name: "Product 2", price: "200.000 VND" },
  { id: 3, name: "Product 3", price: "300.000 VND" },
  { id: 4, name: "Product 4", price: "400.000 VND" },
  { id: 5, name: "Product 5", price: "500.000 VND" },
  { id: 6, name: "Product 6", price: "600.000 VND" },
];

const ProductList = () => {
  return (
    <div className="page">
      <h2>Product List</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
