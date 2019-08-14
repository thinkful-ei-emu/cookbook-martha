import React from 'react';
import CookbookContext from '../../contexts/CookbookContext'
import Recipes from './recipes';
import { Link } from 'react-router-dom';
import './view.css';

class View extends React.Component {
  state={
    title:'',
    recipes: []
  }
  static contextType = CookbookContext;
  
  setTitle = (title) => {
    this.setState({
      title: title
    })
  }

  handleCreateCookbook = (e) => {
    e.preventDefault()
    const { title } = this.state;
    const newCookbook = { 
      title: title
    }
    fetch('https://infinite-eyrie-86661.herokuapp.com/cookbooks', {
      method: 'POST',
      body: JSON.stringify(newCookbook),
      headers: {
        'content-type': 'application/json',
      }
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(e => {throw e})
      }
      return res.json()
    })
    .then(res => {
      this.context.addCookbook(res)
      this.setState({
        title: ''
      })
    });
  };

  handleDeleteCookbook = (cookbookId, callback) => {
    fetch(`https://infinite-eyrie-86661.herokuapp.com/cookbooks/${cookbookId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res=> {
      if(!res.ok){
        return res.json().then(e => {throw e})
      }
    })
    .then(cookbook => {
      callback(cookbookId)
    })
  }

  getACookbook = (cookbookId) => {
    fetch(`https://infinite-eyrie-86661.herokuapp.com/cookbooks/${cookbookId}`)
    .then(res => res.json())
    .then(cookbook => this.selectRecipes(cookbook[0].recipes))
  }

  selectRecipes(ids){
    console.log(ids);
    const list = this.context.recipes.filter(recipe => ids.indexOf(recipe.id) >= 0)
    this.setState({
      recipes: list
    })
  }


  render() {
    return (
      <section className="view-all">
        <Link to='/'>Return Home</Link>
        <form 
        onSubmit={e => this.handleCreateCookbook(e)}>
        <h4>Create a New Cookbook</h4>
        <fieldset className="add-cookbook">
          <label>New Cookbook Title:</label>
          <input 
          type="text" 
          name="title"
          value={this.state.title}
          placeholder="My Favorite Recipes"
          required
          onChange={e => this.setTitle(e.target.value)}></input>
          <button type="submit">Add Cookbook</button>
        </fieldset>
        </form>
      {this.context.cookbooks.map(cookbook => 
      <section 
        key={cookbook.id}
        className="cookbook-title">{cookbook.title} 
      <div 
        className="buttons">
      <button 
        className="view-cookbook"
        type="button"
        onClick={e => this.getACookbook(cookbook.id)}
      >View</button>

      <button 
        type="button"
        className="delete-cookbook"
        onClick={e=> this.handleDeleteCookbook(cookbook.id, this.context.deleteCookbook)}
        >Delete</button>
        </div>
      </section>)}
      <Recipes 
        displayRecipes={this.state.recipes}/>
      </section>
    );
}}

export default View;