import React from 'react';
import '../styles/Header.css';
import logo from '../img/logo.jpg'; 

const Header = () => {
  return (
    <header className="header">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    <nav className="navbar">
      <ul>
        <li><a href="#home">About</a></li>
        <li><a href="#about">Certifications</a></li>
        <li><a href="#services">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </header>
  );
}

export default Header;
