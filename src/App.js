import React from 'react';
import { Route } from 'react-router-dom';
import Registration from './components/registration';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        Header will go here
        </header>
        <main className='App_main'>
        <Route exact path={'/register'} component={Registration} />
        </main>
      </div>
    );
  }
}

export default App;
