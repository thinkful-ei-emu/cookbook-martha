import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './header.css';

class Header extends React.Component {
  handleLogout =() => {
    TokenService.clearAuthToken();
  };
  
  renderLogout() {
    return(
      <div className="links">
      <Link 
        onClick={this.handleLogout}
        to='/'>
        Logout
      </Link>
      </div>
    )
  }

  renderLogin() {
    return(
      <div className="links">
        <Link 
          to='/login'>
          Login
        </Link>
        <br/>
        <Link 
          to='/register'>
          Register
        </Link>
      </div>
    )
  }


  render(){
  return (
    <header role="banner">
      {TokenService.hasAuthToken()
      ? this.renderLogout()
      : this.renderLogin()}
      <Link to={'/'}>  
        <img className="logo" src="images/shakshuka-1.jpg" alt="logo"/>
        <h1>myCookbooks</h1>
      </Link>
    </header>
  );
}}

export default Header;