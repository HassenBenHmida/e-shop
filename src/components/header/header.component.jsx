import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='header-logo'>
     <Link className='logo' to='/'><Logo /></Link>
    </div>
    <div className='header-menu'>
      <Link className='header-menu-item' to='/shop'>SHOP</Link>
      <Link className='header-menu-item' to='/contact'>CONTACT</Link>
      <Link className='header-menu-item' to='/sign-in'>SIGN IN</Link>
    </div>
  </div>
)


export default Header;