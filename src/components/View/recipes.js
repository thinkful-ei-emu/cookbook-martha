import React from 'react';
import { Link } from 'react-router-dom';
import CookbookContext from '../../contexts/CookbookContext';

class Recipes extends React.Component {
static contextType = CookbookContext

render() {
  return (
    <>
    <ul>
      {this.context.recipes.map((recipe, index) => 
        <li key={index}>
          Title: {recipe.title} <br/>
          Author: {recipe.author} <br/>
          Serving Size: {recipe.serving_size} <br/>
          Cook Time: {recipe.cook_time} minutes<br/>
          Difficulty: {recipe.difficulty}<br/>
          Meal Type: {recipe.meal_type} <br/>
          Ingredients: 
          <ul>{recipe.ingredients.map((item, index)=>
          <li key={index}>{item}</li>)}<br/>
          </ul>
          Instructions: 
          <ul>{recipe.instruction.map((item, index) => 
          <li key={index}>{item}</li>)}<br/><br/>
          </ul>
        </li>)}
    </ul>
    <Link to={'/view'}>Back</Link>
    </>
  );
}}

export default Recipes;