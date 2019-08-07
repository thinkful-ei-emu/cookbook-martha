import React from 'react';
import Results from './results';
import CookbookContext from '../../contexts/CookbookContext';

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      search_term: '',
      meal_type: '',
      results: []
    } 
  }
  static contextType = CookbookContext;

  searchMealType = (filter) => {
    this.setState({
      meal_type: filter
    })
  };
  stateSearchTerm = (term) => {
    this.setState({
      search_term: term
    })
  };


  //do in backend??
  handleSearchForm = (e) => {
    e.preventDefault();
    const searchTerm = this.state.search_term;
    const mealType = this.state.meal_type;

    if(this.state.search_term){
      let newResults = this.context.recipes.filter(recipe => 
        recipe.title.includes(searchTerm));

        this.setState({
          results: [...newResults]
        })
    }
    if(this.state.meal_type){
    let newResults = this.context.recipes.filter(recipe => 
      recipe.meal_type === mealType);

      this.setState({
        results: [...newResults]
      })
    }
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
      placeholder='eggs benedict'
      onChange={e => this.stateSearchTerm(e.target.value)}
      />
      <br/>
      <label>Meal Type: </label>
      <select onChange={e => this.searchMealType(e.target.value)}>
        <option value="">Any</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
        <option value="snack">Snack</option>
      </select>
      <br/>
      <button type="submit">Search</button>
    </form>
    <br/>
    Results:
    <Results results={this.state.results}/>
    </div>
  );
}
}

export default Search;