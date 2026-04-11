import React from 'react'
import { Link } from 'react-router-dom';

export const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        <li>
          <Link to="/products/1">Iphone</Link>
        </li>
        <li>
          <Link to="/products/2">Samsung</Link>
        </li>
        <li>
          <Link to="/products/3">Laptop</Link>
        </li>
      </ul>
    </div>
  )
}
