import React from 'react';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function Product({ item }) {
  return (
    <div className="product-container">
      <div className="circle"></div>
      <img className="image" src={item.img} />
      <div className="info">
        <div className="icon">
          <AddShoppingCartOutlinedIcon />
        </div>
        <div className="icon">
          <SearchOutlinedIcon />
        </div>
        <div className="icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Product;