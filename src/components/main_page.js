import React from 'react';
import { Link } from 'react-router-dom';
import './main_page.css';

function MainPage() {
  return (
    <section className="main_page">
      <h3>Lets get started...</h3>
      <p>Create your own cookbooks to orgainze recipes for easy use and storage</p>
      <div className="manage">
        <Link to={'/view'}>View Cookbooks</Link>
      </div>
      <div className="search">
        <Link to={'/search'}>Search for Recipes</Link>
      </div>
      <div className="create">
        <Link to={'/create'}>Create Your Own Recipes!</Link>
      </div>
    </section>
  );
}

export default MainPage;