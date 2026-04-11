import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <h2>Your Cart</h2>
      <p>No items in cart</p>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;