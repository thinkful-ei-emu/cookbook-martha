import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './login.css';

class Login extends React.Component {
  static defaultProps={
    location: {},
    history: {
      push: () => {}
    }
  }

  state = { 
    error: null, 
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination)
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({error: null})
    const { user_name, password} = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken)
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({error: res.error})
      })
  }

  render() {
    const { error } = this.state
  return (
    <div className="login-page">
    <div className="landing-info">
     <h2> Why use myCookbooks?</h2>
      <h3>Create Cookbooks</h3> 
      You will be able to view and add recipes to cookbooks, currently 
      cookbooks are shared with all users. 
      <h3>Create Recipes</h3>
      You will be able to contribute and create your own recipe which will be searchable 
      by anyone to add to a cookbook. 
    </div>
    <form 
    onSubmit={this.handleSubmitJwtAuth}
    className='login_form'>
      <div role='alert'>
        {error && <p className='red'>Oops..{error}</p>}
      </div>
      <fieldset name="login">
      <label htmlFor="username"> Username </label>
      <input 
      name='user_name'
      type='text' 
      placeholder='your username'
      required />
      <label htmlFor="password"> Password </label>
      <input 
      name='password'
      type='password' 
      placeholder='your password'
      required />
      <p>To Use Test User enter: <br/>
      Username: test <br/>
      Password: Test1234!</p>
      <button type="submit">Login</button>
      </fieldset>
      <Link to={'/register'}> Need an Account? Create Account Here </Link>
    </form>
    </div>
  );
}}

export default Login;