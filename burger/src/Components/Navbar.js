import React from 'react';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={logo} alt='Logo' />
            <div className='mainLink'>
              <Link to='/'>Anasayfa</Link>
              <Link to='/menu'>Menü</Link>
              <Link to='/About'>Hakkımızda</Link>
              <Link to='/Contact'>İletişim</Link>
            </div>
        </div>
    </div>
  );
}
