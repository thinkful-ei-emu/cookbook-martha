import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import MainPage from '../main_page';
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
        to='/login'>
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
        </Link> <Link 
          to='/register'>
          Register
        </Link>
      </div>
    )
  }


  render(){
  return (
    <div>
    <header role="banner">
      {TokenService.hasAuthToken()
      ? this.renderLogout()
      : this.renderLogin()}
      <div className="title">
      <Link to={'/view'}>  
        <h1>myCookbooks</h1>
      </Link>
      </div>
    </header>
      {TokenService.hasAuthToken() ? 
      <MainPage /> 
      : ''}
    </div>
  );
}}

export default Header;