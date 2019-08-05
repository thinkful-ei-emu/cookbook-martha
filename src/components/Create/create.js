import React from 'react';

function Create() {
  return (
    <div>
      Ready to make your own recipe?
      <br/>
      <br/>
      <form className='add-recipe'>
      <label>Title:</label>
      <input
      type="text"
      name="title"
      required/>
      <br/>
      <label>Author:</label>
      <input
      type="text"
      name="author"
      />
      <br/>
      <label>Serving size:</label>
      <input
      type="number"
      name="serving"
      required/>servings
      <br/>
      <label>Cook Time (in minutes):</label>
      <input
      type="number"
      name="time"
      />
      <br/>
      <label>Difficulty:</label>
      <select>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
        <option>Professional</option>
      </select>
      <br/>
      <label>Meal Type:</label>
      <select>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
        <option value="snack">Snack</option>
        <option value="other">Other</option>
      </select>
      <br/>
      <label>Ingredients:</label>
      <textarea
      type="textarea"
      name="ingredients"
      required/>
      <br/>
      <label>Instructions:</label>
      <textarea
      type="textarea"
      name="instructions"
      required/>
      </form>
    </div>
  )
}

export default Create;