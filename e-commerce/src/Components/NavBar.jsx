import React from 'react';
import './../styles/navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { logout } from "../redux/api";
import { useSelector, useDispatch } from "react-redux"


function NavBar(props) {

  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch);
  };

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
          <div className='menu-item'>
            {user
              ? user.username
              : <Link style={{ textDecoration: 'none' }} to='/login'>se connecter</Link>
            }
          </div>
          <div className='menu-item'>
            {user
              ? <Link style={{ textDecoration: 'none' }} onClick={handleClick} to='/login'>Se déconnecter</Link>
              : <Link style={{ textDecoration: 'none' }} to='/register'>s'inscrire</Link>
            }
          </div>
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