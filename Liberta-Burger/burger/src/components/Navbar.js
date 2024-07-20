import React from 'react'
import GaziantepLogo from '../assets/b.jpg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={GaziantepLogo} alt=''/>
            <div className='mainLink'>
                <Link to="/">Anasayfa</Link>
                <Link to="/about">Hakkımızda</Link>
                <Link to="/contact">İletişim</Link>
                <Link to="/menu">Menu</Link>
            </div>
        </div>
    </div>
  )
}
export default Navbar;
