import React from 'react';
import CookbookContext from '../../contexts/CookbookContext';
import { Link } from 'react-router-dom';

class Results extends React.Component {
  constructor(props){
    super()
  }
  static contextType = CookbookContext;

  render() {
  return (
    <ul>
      {(this.props.results.length===0)
      ? <div><p>Currently no recipes under that name</p>
        <Link to='/create'>Create your own here</Link></div>

      : this.props.results.map((recipe, index) => 
        <li key={index}>
          Title: {recipe.title} <br/>
          Author: {recipe.author} <br/>
          Serving Size: {recipe.serving_size} <br/>
          Cook Time: {recipe.cook_time} minutes<br/>
          Difficulty: {recipe.difficulty}<br/>
          Meal Type: {recipe.meal_type} <br/>
          Ingredients: 
          <ul>{recipe.ingredients.map((item, index)=>
          <li key={index}>{item}</li>)}
          </ul>
          <br/>
          Instructions: 
          <ul>{recipe.instruction.map((item, index) => 
          <li key={index}>{item}</li>)}
          </ul>
          <br/>
          Add to:
          <select>
            {this.context.cookbooks.map(cookbook => <option key={cookbook.id} value="cookbook 1">{cookbook.title}</option>)}
          </select>
          <br/><br/>
        </li>)}
      <br/>
    </ul>
  );
}}

export default Results;