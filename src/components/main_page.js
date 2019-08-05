import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      Lets get started...
      <br/>
      <Link to={'/search'}>Search Recipes and Cookbooks</Link>
      <br/>
      <Link to={'/create'}>Create Recipes</Link>
      <br/>
      <Link to={'/view'}>View Your Cookbooks</Link>

    </div>
  );
}

export default MainPage;