import React from 'react';
import { Link } from 'react-router-dom';
import './main_page.css';

function MainPage() {
  return (
      <div className="app-links">
        <Link to={'/view'} className="link">View Cookbooks</Link>
        <Link to={'/search'} className="link">Search for Recipes</Link>
        <Link to={'/create'} className="link">Create Your Own Recipes!</Link>
      </div>
  );
}

export default MainPage;