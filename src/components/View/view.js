import React from 'react';
import CookbookContext from '../../contexts/CookbookContext'
import { Link } from 'react-router-dom';

class View extends React.Component {
  state={
    title:''
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
    fetch('http://localhost:8000/api/cookbooks', {
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
      this.title=''
    });
  };

  handleDeleteCookbook = (cookbookId, callback) => {
    fetch(`http://localhost:8000/api/cookbooks/${cookbookId}`, {
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

  render() {
    return (
      <section><h4>View All Your Cookbooks</h4>
        <form 
        onSubmit={e => this.handleCreateCookbook(e)}>
          <label>New Cookbook Title:</label>
          <input 
          type="text" 
          name="title"
          required
          onChange={e => this.setTitle(e.target.value)}></input>
          <button type="submit">Add Cookbook</button>
        </form>
  
      <ul>
      {this.context.cookbooks.map(cookbook => 
      <li key={cookbook.id}>
      <Link to={`/recipes/${cookbook.id}`}
      >{cookbook.title}</Link>

      <button 
        type="button"
        onClick={e=> this.handleDeleteCookbook(cookbook.id, this.context.deleteCookbook)}
        >Delete Cookbook</button>
      </li>)}
      </ul>
      </section>
    );
}}

export default View;