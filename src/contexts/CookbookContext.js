import React from 'react'

const CookbookContext = React.createContext({
  cookbooks: [],
  recipes: [],
  addCookbook: () => {},
  addRecipe: () => {},
  deleteCookbook: () => {},
  editCookbook: () => {}
})

export default CookbookContext;