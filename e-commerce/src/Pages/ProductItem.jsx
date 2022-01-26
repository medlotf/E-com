import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import NavBar from "./../Components/NavBar"
import Announcement from "./../Components/Announcement"
import "./../styles/productItem.css"

function ProductItem(props) {
  return (
    <div>
      <NavBar />
      <Announcement />
      <div className="product-container">
        <div className="image-container">
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </div>
        <div className="info-container">
          <h1>Jean boyfriend</h1>
          <p>
            consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span>20 €</span>
          <div className="filter-container">
            <div className="filter">
              <span>Color</span>
              <div className="filter-color" style={{ backgroundColor: "black" }}></div>
              <div className="filter-color" style={{ backgroundColor: "darkblue" }}></div>
              <div className="filter-color" style={{ backgroundColor: "red" }}></div>
            </div>
            <div className="filter">
              <span>Size</span>
              <select>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
          </div>
          <div className="add-container">
            <div className="amount-container">
              <AddOutlinedIcon />
              <span>1</span>
              <RemoveOutlinedIcon />
            </div>
            <button>Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;