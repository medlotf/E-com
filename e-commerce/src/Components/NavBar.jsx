import React from 'react';
import './../styles/navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

function NavBar(props) {
  return (
    <div className='navbar-container'>
      <div className='navbar-container-wrapper'>
        <div className='left-part'>
          <div className='search'>
            <input className='input' />
            <SearchIcon style={{ color: 'gray', fontSize: 16 }} />
          </div>
        </div>
        <div className='middle-part'>
          <h1>Cobban Shop</h1>
        </div>
        <div className='right-part'>
          <div className='menu-item'>s'inscire</div>
          <div className='menu-item'>se connecter</div>
          <div className='menu-item'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;