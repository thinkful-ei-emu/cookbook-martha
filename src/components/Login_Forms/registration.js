import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Register extends Component {

  render() {
    return (
      <form className='registration_form'>
        <h4>Ready to start organizing your own cookbooks!</h4>
      <label>Name</label>
      <input
      name='name'
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
