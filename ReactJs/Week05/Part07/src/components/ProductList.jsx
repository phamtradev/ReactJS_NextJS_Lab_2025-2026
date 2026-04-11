import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Iphone', price: '$999' },
    { id: 2, name: 'Samsung', price: '$799' },
    { id: 3, name: 'Laptop', price: '$1200' },
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link> - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;