import React from 'react';
import NavBar from '../Components/NavBar';
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import "./../styles/productsList.css"

function ProductList(props) {
  return (
    <div>
      <NavBar />
      <Announcement />
      <div className="filter-container">
        <div className="filter">
          <select>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <span className='filter-text'>Sort Products:</span>
          <select>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <div className="prods">
        <Products />
      </div>
    </div>
  );
}

export default ProductList;