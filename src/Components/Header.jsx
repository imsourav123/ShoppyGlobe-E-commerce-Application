// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Ensure the CSS file is imported
import cartLogo from '../assets/trolley.png';

const Header = () => {
    return (
        <header className="header">
            <h1>ShoppyGlobe</h1>
            <nav className="nav">
                <Link className='Home' to="/">Home</Link>
                <Link to="/cart" className="cart-link">
                    <img src={cartLogo} alt="Cart" className="cart-logo" />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
