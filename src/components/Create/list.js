import React from 'react';
import { Link } from 'react-router-dom';
import CookbookContext from '../../contexts/CookbookContext';
import './list.css';

class List extends React.Component{
  state={
    recipe: [],
    cookbookChoice: null
  }
  static contextType = CookbookContext

  onCookbookSelect= (e) => {
    const cookbook_id = parseInt(e.target.value)
    this.setState({
      cookbookChoice: cookbook_id
    })
    fetch(`https://infinite-eyrie-86661.herokuapp.com/cookbooks/${cookbook_id}`)
    .then(res => {
      if(!res.ok){
        return res.json().then(e => {throw e})
      }
      return res.json()
    })
    .then(rec => rec[0].recipes 
      ?this.setState({recipe: rec[0].recipes})
      : this.setState({recipe: []})
    )
  };

  handleRecipes = e => {
    e.preventDefault();
    const cookbookId = this.state.cookbookChoice;
    const { recipe_id } = this.props.match.params;
    const recipeId = parseInt(recipe_id)
    this.state.recipe.push(recipeId)
    const updatedCookbook = {recipes: this.state.recipe}
    fetch(`https://infinite-eyrie-86661.herokuapp.com/cookbooks/${cookbookId}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedCookbook),
      headers: { 
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(error => Promise.reject(error))
    })
    .then(() => {
      this.context.editCookbook(updatedCookbook)
      this.props.history.push('/')
    });
  };

  render(){
    const cookbookChoice = this.context.cookbooks.map((cookbook, index) => 
      <div key={index}>
      <input 
        key={cookbook.id}
        name="cookbook"
        value={cookbook.id}
        type="radio"
        onChange ={this.onCookbookSelect}
        >
      </input>
      <label>{cookbook.title}</label>
      </div>);

  return (
    <section
      className="select-cook">
        <h4>Select Cookbook to Add Recipe</h4>
      <form
        onSubmit={e =>this.handleRecipes(e)}>
        <fieldset>
          { cookbookChoice }
        <button 
          type="submit">
          Submit
        </button>
        </fieldset>
      </form>
      <Link to='/search'>Back</Link>
    </section>
  );
}}

export default List;