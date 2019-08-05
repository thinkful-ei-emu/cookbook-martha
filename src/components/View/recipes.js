import React from 'react';
import { Link } from 'react-router-dom';

function Recipes () {
  const recipes =[
    {
      id: 1,
      title: 'recipe 1',
      cookbook_id: 1,
    },
    {
      id: 2,
      title: 'recipe 2',
      cookbook_id: 4,
    },
    {
      id: 3,
      title: 'recipe 3',
      cookbook_id: 2,
    },
]

const recipe = recipes.map((recipe, index) => 
  <li key={index}>
    {recipe.title}
  </li>
  )

  return (
    <>
    <ul>
      {recipe}
    </ul>
    <Link to={'/view'}>Back</Link>
    </>
  );
}

export default Recipes;