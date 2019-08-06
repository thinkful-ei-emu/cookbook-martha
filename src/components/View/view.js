import React from 'react';
import CookbookContext from '../../contexts/CookbookContext'
import { Link } from 'react-router-dom';

class View extends React.Component {
  static contextType = CookbookContext;

  //fetch call to get all cookbooks

    
  //fetch call to grab all recipes from the specific cookbook 
  //that was clicked on 

  render() {
    return (
      <ul>
      {this.context.cookbooks.map(cookbook => 
      <li key={cookbook.id}>
      <Link to={`/recipes/${cookbook.id}`}
      //pass down results from recipe fetch here
      >{cookbook.title}</Link>
      </li>
    )}
      </ul>
    );
}}

export default View;