import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      Lets get started...
      <br/>
      <Link to={'/view'}>Manage Your Cookbooks</Link>
      <br/>
      <Link to={'/recipes'}>View All Recipes</Link>
      <br/>
      <Link to={'/create'}>Create Your Own Recipes!</Link>
      <br/>
      <Link to={'/search'}>Search for Recipes</Link>
    </div>
  );
}

export default MainPage;