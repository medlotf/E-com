import React from 'react';
import { Link } from 'react-router-dom';
import "./../styles/categories.css"

function CategoryItem({ item }) {
  return (
    <div className="item-container">
      <Link style={{ textDecoration: 'none' }} to={`/products/${item.category}`} >
        <div className="image-container">
          <img src={item.img} />
          <div className="info-container">
            <h2>{item.title}</h2>
            <button>SHOP NOW</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem;