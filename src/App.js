import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Register from './components/registration';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className='App_main'>
        <BrowserRouter>
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/register'} component={Register} />
        </BrowserRouter>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
