import React from 'react';

class Create extends React.Component {
  constructor () {
    super()
    this.state = {
      title: '',
      author: '',
      serving_size: null,
      cook_time: null,
      difficulty: '',
      meal_type: '',
      ingredients: [],
      instructions: []
    }
  }

  setTitle = (title) => {
    this.setState({
      title: title
    })
  }

  setAuthor = (author) => {
    this.setState({
      author: author
    })
  }

  setServingSize = (serving) => {
    this.setState({
      serving_size: serving
    })
  }

  setCookTime = (time) => {
    this.setState({
      cook_time: time
    })
  }

  setDifficulty = (difficulty) => {
    this.setState({
      difficulty: difficulty
    })
  }

  setMealType = (meal_type) => {
    this.setState({
      meal_type: meal_type
    })
  }

//ingredients and instructions array of data

handleCreateFrom = (e) => {
  //make post request will all the data from the state
  console.log('make post request')
}

  render() {
  return (
    <div>
      Ready to make your own recipe?
      <br/>
      <br/>
      <form className='add-recipe'
      onSubmit={this.handleCreateFrom}>
      <label>Title:</label>
      <input
      type="text"
      name="title"
      required
      onChange={e => this.setTitle(e.target.value)}/>
      <br/>
      <label>Author:</label>
      <input
      type="text"
      name="author"
      onChange={e => this.setAuthor(e.target.value)}/>
      <br/>
      <label>Serving size:</label>
      <input
      type="number"
      name="serving"
      required
      onChange={e => this.setServingSize(e.target.value)}/>
      servings
      <br/>
      <label>Cook Time (in minutes):</label>
      <input
      type="number"
      name="time"
      onChange={e => this.setCookTime(e.target.value)}/>
      <br/>
      <label>Difficulty:</label>
      <select
      onChange={e => this.setDifficulty(e.target.value)}>
      >
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
        <option>Professional</option>
      </select>
      <br/>
      <label>Meal Type:</label>
      <select
      onChange={e => this.setMealType(e.target.value)}
      >
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
      <button type="submit">Create Recipe</button>
      </form>
    </div>
  )
}}

export default Create;