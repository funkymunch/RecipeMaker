import React, { useContext, useState } from 'react';

const RecipeContext = React.createContext();
const SetRecipeConext = React.createContext();

function useRecipe() {
  return useContext(RecipeContext);
}
function useSetRecipe() {
  return useContext(SetRecipeConext);
}

function RecipeProvider({ children }) {
  const [recipe, setRecipes] = useState(null);

  function setRecipe(newState) {
    setRecipes(newState);
  }

  return (
    <RecipeContext.Provider value={recipe}>
      <SetRecipeConext.Provider value={setRecipe}>{children}</SetRecipeConext.Provider>
    </RecipeContext.Provider>
  );
}

export { RecipeProvider, useRecipe, useSetRecipe };
