import React from 'react';
import CookbookContext from '../../contexts/CookbookContext';
import { Link } from 'react-router-dom';
import './search.css';

class Results extends React.Component {
  constructor(props){
    super()
  }
  static contextType = CookbookContext;

  render() {
  return (
    <section>
      {this.props.results.map((recipe, index) => 
         <div key={index}>
         <ul className="list_item">
           <li><Link to={`list/${recipe.id}`} key={recipe.id}> 
           Recipe Title: {recipe.title}</Link> </li>
           <li>Author: {recipe.author} </li>
           <li>Serving Size: {recipe.serving_size} </li>
           <li>Cook Time: {recipe.cook_time} minutes</li>
           <li>Difficulty: {recipe.difficulty}</li>
           <li>Meal Type: {recipe.meal_type} </li>
           <Link to={`seeMore/${recipe.id}`}>See More</Link>
         </ul> 
       </div>
       )}
    </section>
  );
}}

export default Results;