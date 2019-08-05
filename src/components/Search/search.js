import React from 'react';
import Results from './results';

function Search () {
  return (
    <div>
    <form>
      <label>Search:</label>
      <input
      type='text'
      name='search_term'
      required
      placeholder='eggs benedict'/>
      <label>Meal Type: </label>
      <select>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
        <option value="snack">Snack</option>
        <option value="other">Other</option>
      </select>
      <div className="selection_radio">
      <input type="radio" name="selection" value="cookbook"/>Cookbooks
      <input type="radio" name="selection" value="recipe"/>Recipes
      </div>
    </form>
    <br/>
    Results:
    <Results/>
    </div>
  );
}

export default Search;