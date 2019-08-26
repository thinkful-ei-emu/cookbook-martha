import React from 'react';
import CookbookContext from '../../contexts/CookbookContext';
import { Link } from 'react-router-dom';

class Recipes extends React.Component {
  static defaultProps={}
static contextType = CookbookContext

render() {
  return (
    <>
    <hr className="cook"/>
    {this.props.displayRecipes.length === 0 ? 
    <p>No cookbook selected or you need to add recipes to the cookbook</p>
    :
    this.props.displayRecipes.map((recipeId, index) => 
      <p key={index}>
        Title: {recipeId.title} <Link to={`seeMore/${recipeId.id}`}>See More</Link>
      </p>)}
    </>
  );
}}

export default Recipes;