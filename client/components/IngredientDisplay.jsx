/**
 * ************************************
 *
 * @module  IngredientDisplay
 * @author  Han Chae
 * @date    March 6, 2021
 * @description
 *
 * ************************************
 */

import React from 'react';
import { useInventory, useSetInventory } from '../contexts/InventoryContexts';
import axios from 'axios';

function IngredientDisplay({ itemName, use, _id }) {
  const inventory = useInventory();
  const setInventory = useSetInventory();

  const color = use ? 'green' : 'red';

  /**
   * This function will post a delete request to the server to delete this ingredient.
   * It will then update the inventory state.
   */
  function deleteIng() {
    axios
      .delete('/api/inventory', { data: [_id] })
      .then((res) => {
        console.log(`${itemName} with ID:${_id} has been deleted`);
      })
      .catch((e) => {
        console.log('err: delete request is not complete');
      });

    // update state
    let newState = { ...inventory };
    delete newState[itemName];
    setInventory(newState);
  }

  /**
   * This function will update the ingredient bucket number.
   * It will then update the inventory state as well.
   */
  console.log('line21', inventory[itemName]);
  function moveUpOrDown(upOrDown) {
    let bucketNum = inventory[itemName].bucketNumber;
    if (upOrDown === 'down' && bucketNum < 2) bucketNum += 1;
    if (upOrDown === 'up' && bucketNum > 0) bucketNum -= 1;

    let updatedIng = { [itemName]: { itemName: itemName, bucketNumber: bucketNum, use: use, _id: _id } };

    axios
      .put('/api/inventory', updatedIng)
      .then((res) => console.log(`${itemName} has been moved to ${bucketNum}`))
      .catch((e) => {
        console.log('err: move update is not completed');
      });

    // update state
    let newState = { ...inventory, ...updatedIng };
    setInventory(newState);
  }

  return (
    <div style={{ backgroundColor: color, width: '250px' }}>
      {itemName}
      <input type="checkbox" />
      <div>
        <button onClick={(e) => moveUpOrDown('up')}>Move Up</button>
        <button onClick={(e) => moveUpOrDown('down')}>Move Down</button>
      </div>
      <button onClick={(e) => deleteIng(e)}>X</button>
    </div>
  );
}

export default IngredientDisplay;
