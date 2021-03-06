import React, { useState } from 'react';
import axios from 'axios';

function AddIngredient({ bucketNumber, inventory, setInventory }) {
  const [ing, setIng] = useState('');

  function addIng(ing) {
    const tempIng = { [ing]: { itemName: `${ing}`, bucketNumber: bucketNumber, use: false } };
    const newBucket = { ...inventory, ...tempIng };
    console.log('line10added');
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
