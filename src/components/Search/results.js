import React from 'react';
import CookbookContext from '../../contexts/CookbookContext';

class Results extends React.Component {
  constructor(props){
    super()
  }
  static contextType = CookbookContext;

  render() {
  return (
    <ul>
      {(this.props.results)

      ?  this.props.results.map((recipe, index) => 
        <li key={index}>{recipe.title} Add to:
          <select>
            {this.context.cookbooks.map(cookbook => <option key={cookbook.id} value="cookbook 1">{cookbook.title}</option>)}
          </select>
        </li>)

      : this.context.recipes.map((recipe, index) => 
      <li key={index}>{recipe.title} {recipe.meal_type} Add to:
      <select>
        {this.context.cookbooks.map(cookbook => <option key={cookbook.id} value="cookbook 1">{cookbook.title}</option>)}
     </select>
      </li>)

      }
      <br/>
    </ul>
  );
}}

export default Results;