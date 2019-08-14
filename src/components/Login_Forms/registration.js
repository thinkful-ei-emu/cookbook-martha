import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import './registration.css';

export default class Register extends Component {
  static defaultProps = {
    history: {
      push:() => {},
    },
  }
  state = {error: null}

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push('/login')
  }

  handleSubmit = e => {
    e.preventDefault();
    const { full_name, user_name, password } = e.target

    this.setState({
      error: null
    })
    AuthApiService.postUser({
      full_name: full_name.value,
      user_name: user_name.value,
      password: password.value
    })
      .then(user => {
        full_name.value=''
        user_name.value=''
        password.value=''
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form className='registration_form'
      onSubmit={this.handleSubmit}>
       <div role='alert'>
          {error && <p className='red'>{error}</p>}
      </div>
        <h4>Ready to start organizing your own cookbooks!</h4>
        <p>Create your account today!</p>
      <fieldset>
      <label>Full Name</label>
      <input
      name='full_name'
      type='text'
      placeholder="chef cook"
      required/>
      <label>Username</label>
      <input
      name='user_name'
      type='text'
      placeholder="loveCooking"
      required/>
      <label>Password</label>
      <input
      name='password'
      type='password'
      placeholder="password"
      required/>
      <button type="submit">Submit</button>
      </fieldset>
      <Link to={'/login'}>Already have an account? Login here.</Link>
      </form>
    )
  }
}
