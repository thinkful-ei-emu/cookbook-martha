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
import List from './components/Create/list';
import View from './components/View/view';
import Recipes from './components/View/recipes';
import seeMore from './components/Search/seemore';
import './App.css';
import CookbookContext from './contexts/CookbookContext';
import config from './config';

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

  editCookbook = updatedCookbook => {
    this.setState({
      cookbooks: this.state.cookbooks.map(cookbook => 
        (cookbook.id !== updatedCookbook.id) 
        ? cookbook
        : {...updatedCookbook})
    })
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/cookbooks`)
      .then(res => res.json())
      .then(cookbooks => this.setState({
        cookbooks: cookbooks
      }))
      
      fetch(`${config.API_ENDPOINT}/api/recipes`)
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
        deleteCookbook: this.deleteCookbook,
        editCookbook: this.editCookbook
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
          <PrivateRoute exact path={'/list/:recipe_id'} component={List}/>
          <PrivateRoute exact path={'/view'} component={View} />
          <PrivateRoute exact path={'/seemore/:recipe_id'} component={seeMore}/>
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
