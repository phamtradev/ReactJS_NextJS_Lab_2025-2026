import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate(); 

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Product ID: 1</p>
      <button onClick={handleBuyNow}>Mua hàng</button>
    </div>
  );
};

export default ProductDetail;