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
    <div>
    <h4> Welcome Back! Ready to start cooking? </h4>
    <p>User Login</p>
    <p>To Use Test User enter: Username: test Password: Test1234!</p>
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
      <button type="submit">Login</button>
      </fieldset>
      <Link to={'/register'}> Need an Account? Create Account Here </Link>
    </form>
    </div>
  );
}}

export default Login;