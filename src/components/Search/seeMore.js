import React from 'react'
import CookbookContext from '../../contexts/CookbookContext';
import { Link } from 'react-router-dom'
import './seeMore.css';

class seeMore extends React.Component {
  static contextType = CookbookContext;
  state={
    recipe: []
  }

  componentDidMount = () => {
    fetch(`http://localhost:8000/api/recipes/${this.props.match.params.recipe_id}`)
      .then(res=> res.json())
      .then(recipe => this.setState({
        recipe: recipe
      }))
  }

  render(){
    return (
      <section>
      <Link to='/'>Return Home</Link>
      {this.state.recipe.length === 0 
      ? <div>Loading...</div>
      :<ul className="list_item">
      <h2>Recipe for {this.state.recipe.meal_type}: {this.state.recipe.title}</h2>
      <li>Author: {this.state.recipe.author} </li>

      <div className="small-info">
      <li>Difficulty: {this.state.recipe.difficulty} | Cook Time: {this.state.recipe.cook_time} minutes | Serving Size: {this.state.recipe.serving_size} serving </li> 
      </div>
      <hr/>
      
      <section className="lists">
      
      <div className="lists_ingredients">
        <h3>Ingredients:</h3>
        <ul>{this.state.recipe.ingredients.map((item, index)=>
          <li key={index}>{item}</li>)}
        </ul>
      </div>

      <div className="lists_instructions">
        <h3>Instructions:</h3>
        <ul>{this.state.recipe.instruction.map((item, index) => 
          <li key={index}>{item}</li>)}
        </ul>
      </div>

      </section>
      </ul>} 
      <Link to='/search'>Back</Link>
      </section>
)}}

export default seeMore;