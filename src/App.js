import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import PrivateRoute from './components/Utils/PrivateRoute';
import PublicRoute from './components/Utils/PublicOnlyRoute';
import Login from './components/Login_Forms/login';
import Register from './components/Login_Forms/registration';
import MainPage from './components/main_page';
import Search from './components/Search/search';
import Create from './components/Create/create';
import View from './components/View/view';
import Recipes from './components/View/recipes'
import './App.css';
import CookbookContext from './contexts/CookbookContext';

class App extends React.Component {
  state = {
    cookbooks: [],
    recipes: [],
    error: false,
    errorMessage: ''
  };

  addCookbook = cookbook => {
    this.setState({
      cookbooks: [...this.state.cookbooks, cookbook]
    })
  };

  addRecipe = recipe => {
    this.setState({
      recipes: [...this.state.recipes, recipe]
    })
  };

  deleteCookbook = cookbookId => {
    const newCookbooks = this.state.cookbooks.filter(cookbook => cookbook.id !== cookbookId);

    this.setState({
      cookbooks: newCookbooks
    })
  };

  componentDidMount() {
    fetch('http://localhost:8000/api/cookbooks')
      .then(res => res.json())
      .then(cookbooks => this.setState({
        cookbooks: cookbooks
      }))
      
      fetch('http://localhost:8000/api/recipes')
      .then(res => res.json())
      .then(recipes => this.setState({
        recipes: recipes
      }))
  }

  render() {
    return (
      <CookbookContext.Provider
      value={{
        cookbooks: this.state.cookbooks,
        recipes: this.state.recipes,
        addCookbook: this.addCookbook,
        addRecipe: this.addRecipe,
        deleteCookbook: this.deleteCookbook
      }}
      >
      <div className="App">
      <BrowserRouter>
        <Header />
        <main className='App_main'>
          {this.state.hasError && <p>There was an error! Oh no!</p>}
          <PublicRoute exact path={'/login'} component={Login} />
          <PublicRoute exact path={'/register'} component={Register} />
          <PrivateRoute exact path={'/'} component={MainPage} />
          <PrivateRoute exact path={'/search'} component={Search} />
          <PrivateRoute exact path={'/create'} component={Create} />
          <PrivateRoute exact path={'/view'} component={View} />
          <PrivateRoute exact path={'/recipes/:cookbook_id'} component={Recipes} />
        </main>
        <Footer/>
        </BrowserRouter>
      </div>
      </CookbookContext.Provider>
    );
  }
}

export default App;
