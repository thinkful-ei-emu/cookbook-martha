import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';

export default class Register extends Component {
  static defaultProps = {
    onRegistrationSuccuss: () => {}
  }

  state = {error: null}

  handleSubmit = e => {
    e.preventDefualt();
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
        this.props.onRegistrationSuccuss()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form className='registration_form'>
       <div role='alert'>
          {error && <p className='red'>{error}</p>}
      </div>
        <h4>Ready to start organizing your own cookbooks!</h4>
      <label>Full Name</label>
      <input
      name='full_name'
      type='text'
      required/>
      <label>Username</label>
      <input
      name='user_name'
      type='text'
      required/>
      <label>Password</label>
      <input
      name='password'
      type='text'
      required/>
      <button>Submit</button>
      <Link to={'/login'}>Already have an account? Login here.</Link>
      </form>
    )
  }
}
