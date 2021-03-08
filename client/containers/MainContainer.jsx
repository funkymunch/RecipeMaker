import React from 'react';
import InventoryContainer from './InventoryContainer';
import RecipesContainer from './RecipesContainer';
import { InventoryProvider } from '../contexts/InventoryContexts';

function MainContainer() {
  return (
    <div>
      <InventoryProvider>
        <h1>Hello</h1>
        <InventoryContainer />
        {/* <RecipesContainer /> */}
      </InventoryProvider>
    </div>
  );
}

export default MainContainer;
