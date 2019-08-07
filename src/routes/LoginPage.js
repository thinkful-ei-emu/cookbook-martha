import React from 'react'
import Login from '../components/Login_Forms/login';

class LoginPage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination)
  }

  render() {
    return (
      <section>
        <h2>Login</h2>
        <Login onLoginSuccess={this.handleLoginSuccess}/>
      </section>
    );
  }
}

export default LoginPage;