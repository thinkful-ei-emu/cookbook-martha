import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

class Login extends React.Component {
  static defaultProps={
    location: {},
    history: {
      push: () => {}
    }
  }

  state = { error: null }

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
    <h2> Login Here </h2>
    <form 
    onSubmit={this.handleSubmitJwtAuth}
    className='login_form'>
      <div role='alert'>
        {error && <p className='red'>{error}</p>}
      </div>
      <label> Username </label>
      <input 
      name='user_name'
      type='text' 
      placeholder='your username'
      required />
      <label> Password </label>
      <input 
      name='password'
      type='password' 
      placeholder='your password'
      required />
      <button type="submit">Login</button>
      <Link to={'/register'}> Need an Account? Create Account Here </Link>
    </form>
    </div>
  );
}}

export default Login;