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
      <Link 
        onClick={this.handleLogout}
        to='/'>
        Logout
      </Link>
    )
  }

  renderLogin() {
    return(
      <div>
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
    <header className="header">
    <Link to={'/'}>  
      <img className="logo" src="images/shakshuka-1.jpg" alt="logo"/>
      <h1>myCookbooks</h1>
    </Link>
   {TokenService.hasAuthToken()
    ? this.renderLogout()
    : this.renderLogin()}

    </header>
  );
}}

export default Header;