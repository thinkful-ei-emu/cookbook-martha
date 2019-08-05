import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/header';
//import Footer from './components/Footer/footer';
import Login from './components/Login_Forms/login';
import Register from './components/Login_Forms/registration';
import MainPage from './components/main_page';
import Search from './components/Search/search';
import Create from './components/Create/create';
import View from './components/View/view';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <main className='App_main'>
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/register'} component={Register} />
          <Route exact path={'/'} component={MainPage} />
          <Route exact path={'/search'} component={Search} />
          <Route exact path={'/create'} component={Create} />
          <Route exact path={'/view'} component={View} />
        </main>
        {/* <Footer/> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
