import React from 'react';
import Results from './results';
import config from '../../config';

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      search_term: '',
      meal_type: '',
      recipes: []
    } 
  }

  //searching with meal type filter
  searchMealType = (filter) => {
    this.setState({
      meal_type: filter
    })
  };

  //searching with term
  stateSearchTerm = (term) => {
    this.setState({
      search_term: term
    })
  };

  //will fetch the database and add the results into the state
  resultingRecipes = (recipes) => {
    const list = recipes.results.map(recipe => console.log(recipe));

    this.setState({
      recipes: list
    })
  };

  handleSearchForm = (e) => {
    e.preventDefault();
    console.log('making call...')
    const searchTerm = this.state.search_term;
    fetch(`${config.API_ENDPOINT}/recipes/?search=${searchTerm}`)
      .then(res => (!res.ok) 
        ? res.json().then(e => Promise.reject(e)) 
        : res.json()
      )
      .then(recipes => this.resultingRecipes(recipes))
  }

  render(){
  return (
    <div>
    <form onSubmit={this.handleSearchForm}>
      <label>Search for Recipes:</label>
      <input
      type='text'
      name='search_term'
      id='search_term'
      required
      placeholder='eggs benedict'
      onChange={e => this.stateSearchTerm(e.target.value)}
      />
      <br/>
      <label>Meal Type: </label>
      <select onChange={e => this.searchMealType(e.target.value)}>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
        <option value="snack">Snack</option>
        <option value="other">Other</option>
      </select>
      <button type="submit">Search</button>
    </form>
    <br/>
    Results:
    <Results recipes={this.state.recipes}/>
    </div>
  );
}
}

export default Search;