/**
 * ************************************
 *
 * @module  AddIngredient
 * @author  Hanji Chen
 * @date    March 6, 2021
 * @description
 *
 * ************************************
 */

import React, { useState } from 'react';
import { useInventory, useSetInventory } from '../contexts/InventoryContexts';
import axios from 'axios';

function AddIngredient({ bucketNumber }) {
  const inventory = useInventory();
  const setInventory = useSetInventory();
  const [ing, setIng] = useState('');

  function addIng(ing) {
    if (inventory[ing]) return window.alert('Already in inventory!');
    const tempIng = { [ing]: { itemName: `${ing}`, bucketNumber: bucketNumber, use: false } };
    const newBucket = { ...inventory, ...tempIng };
    axios
      .post('./api/inventory', tempIng)
      .then((res) => console.log('AddIngRes', res))
      .catch((err) => {
        console.log('AddIngErr', err);
      });
    setInventory(newBucket);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ing) return;
    addIng(ing);
    setIng('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={ing} onChange={(e) => setIng(e.target.value)} placeholder="Add Ingredient.." />
    </form>
  );
}

export default AddIngredient;
