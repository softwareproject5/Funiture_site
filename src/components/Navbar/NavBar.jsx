import React from 'react';
import './NavBar.css'; // Corrected import for the CSS file
import { assets } from '../../assets/assets.js';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo_black} alt="logo" className="logo" />
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Catagory</li>
        <li>Mobile App</li>
        <li>About Us</li>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search} alt=" search" className="search" />
        <div className='navbar-search-icon'>
          <img src={assets.cart} alt="cart" className="cart" />
          <div className='dot'></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default NavBar;
