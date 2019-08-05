import React from 'react';
import { Link } from 'react-router-dom';

function Login () {
  return (
    <div>
    <h2> User Login </h2>
    <form className='login_form'>
      <label> Username </label>
      <input 
      name='user_name'
      type='text' 
      placeholder='your username'
      required />
      <label> Password </label>
      <input 
      name='password'
      type='text' 
      placeholder='your password'
      required />
      <button>LOGIN</button>
      <Link to={'/register'}> Create Account </Link>
    </form>
    </div>
  );
}

export default Login;