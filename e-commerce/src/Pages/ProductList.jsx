import React from 'react';
import NavBar from '../Components/NavBar';
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import "./../styles/productsList.css"
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ProductList(props) {

  const location = useLocation();
  const category = location.pathname.split("/")[2]
  const [filters, setFilter] = useState({})
  const [sort, setSort] = useState({})

  const handleSelect = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value
    })
  }

  return (
    <div className='p-list'>
      <NavBar />
      <Announcement />
      <div className="filter-container">
        <div className="filter">
          <select onChange={handleSelect} name="color">
            <option disabled>
              Color
            </option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>
          <select onChange={handleSelect} name="size">
            <option disabled>
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
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <div className="prods">
        <Products category={category} sort={sort} filters={filters} />
      </div>
    </div>
  );
}

export default ProductList;