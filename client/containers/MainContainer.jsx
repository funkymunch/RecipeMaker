import React from 'react';
import InventoryContainer from './InventoryContainer';
import RecipesContainer from './RecipesContainer';
import { InventoryProvider } from '../contexts/InventoryContexts';

function MainContainer() {
  return (
    <div>
      <InventoryProvider>
<<<<<<< HEAD
=======
        <h1>Hello</h1>
>>>>>>> main
        <InventoryContainer />
        {/* <RecipesContainer /> */}
      </InventoryProvider>
    </div>
  );
}

export default MainContainer;
