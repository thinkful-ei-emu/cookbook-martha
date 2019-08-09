import React from 'react';
import { Link} from 'react-router-dom';
import CookbookContext from '../../contexts/CookbookContext';

class List extends React.Component{
  state={
    recipe: [],
    cookbookChoice: null
  }

  static contextType = CookbookContext

  componentDidMount() {
    const { recipe_id } = this.props.match.params;
    fetch(`http://localhost:8000/api/recipes/${recipe_id}`)
    .then(res => res.json())
    .then(recipe => this.setState({
      recipe: recipe
    }))
  };  

  onCookbookSelect= (e) => {
    this.setState({
      cookbookChoice: e.target.value
    })
  }

  handleRecipes = e => {
    e.preventDefault();
    const cookbookId = this.state.cookbookChoice;
    const { recipe_id } = this.props.match.params;
    const updatedCookbook = {recipes: [parseInt(recipe_id)]}
    console.log(updatedCookbook)
    fetch(`http://localhost:8000/api/cookbooks/${cookbookId}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedCookbook),
      headers: { 
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(e=> Promise.reject(e))
      }
      res.json()
    })
    .then(()=> {
      this.context.editCookbook(updatedCookbook)
    });
  };

  render(){
    const cookbookChoice = this.context.cookbooks.map((cookbook, index) => 
      <div key={index}>
      <input 
        key={cookbook.id}
        name="cookbook"
        value={cookbook.id}
        type="radio"
        onChange ={this.onCookbookSelect}
        >
      </input>
      <label>{cookbook.title}</label>
      </div>);

  return (
    <section>
        <h4>Title:{this.state.recipe.title}</h4>
        <p>Difficulty: {this.state.recipe.difficulty}, Meal Type: {this.state.recipe.meal_type}</p>
      <form
        onSubmit={e =>this.handleRecipes(e)}>
        Add to:
          { cookbookChoice }
        <button 
          type="submit">
          Submit
        </button>
      </form>
      <br/><br/>
      <Link to='/recipes'>Back</Link>
    </section>
  );
}}

export default List;