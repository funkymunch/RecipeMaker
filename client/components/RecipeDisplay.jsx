import React, { useState } from 'react';
import { useInventory, useSetInventory } from '../contexts/InventoryContexts';

function RecipeDisplay(props) {
  const inventory = useInventory();
  const setInventory = useSetInventory();
  // Title

  // Picture

  // Info:
  //    cooking itme:
  //    servings:

  // Summary

  // Ingredients

  // Instructions

  // Button

  return (
    <div>
      <h1>Title</h1>
    </div>
  );
}
export default RecipeDisplay;
