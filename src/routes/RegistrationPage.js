import React from 'react';
import Register from '../components/Login_Forms/registration';

class RegistrationPage extends React.Component {
  static defaultProps ={
    history: {
      push:() => {}
    }
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push('/login')
  }

  render() {
    return (
      <section>
        <h2>Registration</h2>
        <Register onRegistrationSuccess={this.handleRegistrationSuccess}/>
      </section>
    );
  }
}

export default RegistrationPage;