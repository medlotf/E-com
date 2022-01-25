import React from 'react';
import "./../styles/categories.css"

function CategoryItem({ item }) {
  return (
    <div className="item-container">
      <div className="image-container">
        <img src={item.img} />
        <div className="info-container">
          <h2>{item.title}</h2>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;