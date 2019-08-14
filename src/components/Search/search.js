import React from 'react';
import Results from './results';
import CookbookContext from '../../contexts/CookbookContext';
import { Link } from 'react-router-dom';
import './search.css';

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      search_term: '',
      results: [],
      clicked: false,
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

  seeMore = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
  return (
    <section className="search_results">
    <Link to='/'>Return Home</Link>
    <form onSubmit={this.handleSearchForm}>
    <fieldset className="search-recipes">
      <label>Search for Recipes:</label>
      <input
      type='text'
      name='search_term'
      id='search_term'
      value={this.state.search_term}
      placeholder='eggs benedict'
      onChange={e => this.stateSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
      <p>Click on Recipe to add to your own Cookbook!</p>
    </fieldset>
    </form>
    {this.state.results.length === 0
    ? 
    
    <section className="search_list">
      {this.context.recipes.map((recipe, index)=> 
      <div key={index}>
        <ul className="list_item">
          <li><Link to={`list/${recipe.id}`} key={recipe.id}> 
          Recipe Title: {recipe.title}</Link> </li>
          <li>Author: {recipe.author} </li>
          <li>Serving Size: {recipe.serving_size} </li>
          <li>Cook Time: {recipe.cook_time} minutes</li>
          <li>Difficulty: {recipe.difficulty}</li>
          <li>Meal Type: {recipe.meal_type} </li>
          <Link to={`seeMore/${recipe.id}`}>See More</Link>
        </ul>
      </div>
      )}
    </section>
    
    :<section>Results
    <Results results={this.state.results}/>
    </section>
    }
    <Link to='/'>Return Home</Link>
    </section>
  );
}
}

export default Search;