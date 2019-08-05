import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <Link to={'/'}>  
      Logo<h1>myCookbooks</h1>
    </Link>
  );
}

export default Header;