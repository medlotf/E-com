import React from 'react';
import "./../styles/categories.css"
import { categories } from "./../data/categoriesItems"
import CategoryItem from "./CategoryItem"

function Categories(props) {
  return (
    <div className='category-container'>
      {categories.map(c => <CategoryItem key={c.id} item={c} />)}
    </div>
  );
}

export default Categories;