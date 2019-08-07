import React from 'react'

const CookbookContext = React.createContext({
  cookbooks: [],
  recipes: [],
  addCookbook: () => {},
  addRecipe: () => {},
  deleteCookbook: () => {},
  editRecipe: () => {},
  editCookbook: () => {}
})

export default CookbookContext;