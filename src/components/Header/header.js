import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header () {
  return (
    <header className="header">
    <Link to={'/'}>  
      <img className="logo" src="images/shakshuka-1.jpg" alt="logo"/>
      <h1>myCookbooks</h1>
    </Link>
   
    <Link to={'/login'}>
    <div className="link">Login</div>
    </Link>
    </header>
  );
}

export default Header;