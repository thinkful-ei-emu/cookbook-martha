import React from 'react';
import CookbookContext from '../../contexts/CookbookContext';
import { Link } from 'react-router-dom'
import './create.css';
import config from '../../config';

class Create extends React.Component {
  staticDefaultProps={
  }
    state = {
      title: '',
      author: '',
      serving_size: undefined,
      cook_time: undefined,
      difficulty: '',
      meal_type: '',
      ingredients: [],
      instruction: [],
      newIngredient: '',
      newInstruction: '',
      cookbook: ''
    }
  static contextType = CookbookContext;

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

  setNewIngredient = (ingredient) => {
    this.setState({
      newIngredient: ingredient
    })
  }

  addIngredient = () => {
    this.setState({
      ingredients : [...this.state.ingredients, this.state.newIngredient],
      newIngredient: ''
    })
  }

  setNewInstruction = (instruction) => {
    this.setState({
      newInstruction: instruction
    })
  }

  addInstruction = () => {
    this.setState({
      instruction: [...this.state.instruction, this.state.newInstruction],
      newInstruction: ''
    })
  }

  setSelectCookbook = (cookbook) => {
    this.setState({
      cookbook: cookbook
    })
  }
  
  reset = (e) => {
    this.setState({
      title: '',
      ingredients: [],
      instruction: [],
    })
  }

  handleCreateFrom = (e) => {
    e.preventDefault()
    const { title, author, serving_size, cook_time, difficulty, meal_type, ingredients, instruction } = this.state
    const recipe = {
      title: title,
      author: author,
      serving_size: serving_size,
      cook_time: cook_time,
      difficulty: difficulty,
      meal_type: meal_type,
      ingredients: ingredients,
      instruction: instruction
    }
    fetch(`${config.API_ENDPOINT}/api/recipes`, {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: {
        'content-type': 'application/json',
      }
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(e => {throw e})
      }
      return res.json()
    })
    .then(res => { 
      this.setState(
        {
          title:'',
          author:'',
          serving_size:null,
          cook_time:null,
          difficulty:'',
          meal_type:'',
          ingredients:[],
          instruction:[],
        }
        )
      this.context.addRecipe(res)
    });
  };

  render(){
  return (
    <section className="create_recipe">
      <Link to='/'>Return Home</Link>
      <form className='add-recipe'
      onSubmit={this.handleCreateFrom}>

      <h4>Ready to make your own recipe?</h4>
      <fieldset>
      <label>Title:</label>
      <input
      type="text"
      name="title"
      value={this.state.title}
      placeholder="eggs benedict"
      required
      onChange={e => this.setTitle(e.target.value)}/>
      <br/>
      <label>Author:</label>
      <input
      type="text"
      name="author"
      placeholder="chef best cook"
      value={this.state.author}
      onChange={e => this.setAuthor(e.target.value)}/>
      <br/>
      <label>Serving size:</label>
      <input
      type="number"
      name="serving"
      placeholder="4"
      value={this.state.serving_size}
      required
      onChange={e => this.setServingSize(e.target.value)}/> servings
      <br/>
      <label>Cook Time:</label>
      <input
      type="number"
      name="time"
      placeholder="45"
      value={this.state.cook_time}
      required
      onChange={e => this.setCookTime(e.target.value)}/> minutes
      <br/>
      <label>Difficulty:</label>
      <select
      onChange={e => this.setDifficulty(e.target.value)}>
      > 
        <option required>Choose a Difficulty</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="professional">Professional</option>
      </select>
      <br/>
      <label>Meal Type:</label>
      <select
      onChange={e => this.setMealType(e.target.value)}
      >
        <option required>Choose a Meal Type</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
        <option value="snack">Snack</option>
        <option value="other">Other</option>
      </select>
      <br/>
      <section className="both-lists">
      <div className="ingredient-list">
      <label>Ingredients:</label>
      <input
      type="text"
      name="ingredients"
      placeholder="sugar"
      value={this.state.newIngredient}
      onChange={e => this.setNewIngredient(e.target.value)}
      />
      <button
      type="button"
      onClick={this.addIngredient}
      >Add Ingredient</button>
      <br/>
      All Ingredients in your recipe:
      {(this.state.ingredients.length===0)
      ? ''
      :this.state.ingredients.map((ingredient, index)=> <li key={index}>{ingredient}</li>)}
      </div>
      <div className="instructions-list">
      <label>Instructions:</label>
      <input
      type="text"
      name="instruction"
      placeholder="dice 1/2 an onion"
      value={this.state.newInstruction}
      onChange={e => {this.setNewInstruction(e.target.value)}}
      />
      <button
      type="button"
      onClick={this.addInstruction}
      >Add Instruction</button>
      <br/>
      Instructions for {this.state.title}:
      {(this.state.instruction.length===0)
      ? ''
      : this.state.instruction.map((instruction, index)=>  <li key={index}>{instruction}</li>)}
      </div>
      </section>
      </fieldset>
      <button type="reset" onClick={this.reset}>Reset</button> <button type="submit">Create Recipe</button>
      </form>
    </section>
  )
}}

export default Create;