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
          Title:{recipe.title} <br/>
          Author: <br/>
          Serving Size: <br/>
          Cook Time: _minutes<br/>
          Difficulty: <br/>
          Meal Type:{recipe.meal_type} <br/>
          Ingredients: <br/>
          Instructions: <br/><br/>
        </li>
      
      )}
    </ul>
    <Link to={'/view'}>Back</Link>
    </>
  );
}}

export default Recipes;