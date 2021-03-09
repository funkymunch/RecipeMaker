import React from 'react';
import InventoryContainer from './InventoryContainer';
import RecipesContainer from './RecipesContainer';
import { InventoryProvider } from '../contexts/InventoryContexts';
import { RecipeProvider } from '../contexts/RecipeContext';

function MainContainer() {
  return (
    <div style={{ display: 'flex' }}>
      <InventoryProvider>
        <RecipeProvider>
          <InventoryContainer />
          <RecipesContainer />
        </RecipeProvider>
      </InventoryProvider>
    </div>
  );
}

export default MainContainer;
