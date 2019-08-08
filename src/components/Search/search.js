import React from 'react';
import Results from './results';
import CookbookContext from '../../contexts/CookbookContext';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      search_term: '',
      results: []
    } 
  }
  static contextType = CookbookContext;

  stateSearchTerm = (term) => {
    this.setState({
      search_term: term
    })
  };

  handleSearchForm = (e) => {
    e.preventDefault();
    const searchTerm = this.state.search_term;

    if(this.state.search_term){
      let newResults = this.context.recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));

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
      <button type="submit">Search</button>
    </form>
    <br/>
    Results:
    <Results results={this.state.results}/>

    <Link to='/'>Return Home</Link>
    </div>
  );
}
}

export default Search;