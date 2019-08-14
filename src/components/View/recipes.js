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
    {this.props.displayRecipes.map((recipeId, index) => 
      <p key={index}>
        Title: {recipeId.title} <Link to={`seeMore/${recipeId.id}`}>See More</Link>
      </p>)}
    </>
  );
}}

export default Recipes;