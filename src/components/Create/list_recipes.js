import React from 'react';
import CookbookContext from '../../contexts/CookbookContext';
import { Link } from 'react-router-dom';

class ListRecipes extends React.Component {

  static contextType = CookbookContext;

  render() {
  return (
    <section>List of all Recipes: 
    {this.context.recipes.map((recipe, index)=> 
    <p key={index}><Link to={`list/${recipe.id}`} key={recipe.id}> 
    Recipe Title: {recipe.title}</Link></p>)}
    </section>
  );
}}

export default ListRecipes;