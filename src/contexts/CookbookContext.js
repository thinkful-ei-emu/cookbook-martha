import React from 'react'

const CookbookContext = React.createContext({
  cookbooks: [{id: 1, title: 'cook1'}, {id:2, title: 'cook2'}],
  recipes: [{id: 1, title: 'rec1', meal_type: 'breakfast', cookbook_id: '1'},  {id: 1, title: 'rec2', meal_type: 'lunch', cookbook_id: 2}],
  addCookbook: () => {},
  addRecipe: () => {},
  deleteCookbook: () => {},
  editRecipe: () => {},
  editCookbook: () => {}
})

export default CookbookContext;