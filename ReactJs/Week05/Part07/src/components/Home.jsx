import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Our Shop</h2>
      <Link to="/products">View Products</Link>
    </div>
  );
};

export default Home;