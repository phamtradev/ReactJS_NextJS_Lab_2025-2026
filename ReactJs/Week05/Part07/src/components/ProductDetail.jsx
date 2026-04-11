import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = {
    1: { name: 'Iphone', description: 'Latest iPhone', price: '$999' },
    2: { name: 'Samsung', description: 'Latest Samsung phone', price: '$799' },
    3: { name: 'Laptop', description: 'High performance laptop', price: '$1200' },
  };

  const handleAddToCart = () => {

    alert(`Added ${product[id].name} to the cart`);
    navigate('/cart');
  };

  if (!product[id]) return <h3>Product not found</h3>;

  return (
    <div>
      <h2>{product[id].name}</h2>
      <p>{product[id].description}</p>
      <p>{product[id].price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;