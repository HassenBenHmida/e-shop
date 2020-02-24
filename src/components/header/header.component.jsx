import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <div className='header-logo'>
     <Link className='logo' to='/'><Logo /></Link>
    </div>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {currentUser ? (
        <a className='option' onClick={() => auth.signOut()}> SIGN OUT </a>
      ) : (
        <Link className='option' to='/signin'>SIGN IN</Link>
      )}
    </div>
  </div>
);

export default Header;