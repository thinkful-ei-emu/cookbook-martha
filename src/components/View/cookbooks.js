import React from 'react';
import Recipes from './recipes';
import { Link } from 'react-router-dom';

function Cookbooks() {
  const cookbookstest =[
    {
      id: 1,
      title: 'cookbok 1',
    },
    {
      id: 2,
      title: 'cookbook 2',
    },
    {
      id: 3,
      title: 'cookbook 3',
    },
    {
      id: 4,
      title: 'cookbook 4',
    },
]

  const cookbooks = cookbookstest.map(cookbook => 
    <li key={cookbook.id}>
    <Link to={`/cookbook/${cookbook.id}`}>{cookbook.title}</Link>
    <Recipes/>
    </li>
    )

  return (
    <ul>
    {cookbooks}
    </ul>
  );
}

export default Cookbooks