// import React, { Component } from 'react';
import React, { useState } from 'react';
import AddIngredient from './AddIngredient';
import IngredientDisplay from './IngredientDisplay';

// // class InventoryBucket extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>Hello</h1>
// //         <AddIngredient />
// //         <IngredientDisplay />
// //       </div>
// //     );
// //   }
// // }

// {carrot: {itemName: carrot: bucketNumber: 1, use: true, _id: 1234}, carrot: {itemName: carrot: bucketNumber: 1, use: true, _id: 1234}
// carrot: {itemName: carrot: bucketNumber: 1, use: true, _id: 1234}, carrot: {itemName: carrot: bucketNumber: 1, use: true, _id: 1234}}

function InventoryBucket({ bucket, bucketNumber, inventory, setInventory }) {
  // function addIng(ing) {
  //   const tempIng = { itemName:  `${ing}`, bucketNumber: `${bucketNumber}`, use: false };
  //   const newBucket = { ...invBucket, [ing]: tempIng };
  //   setBucket(newBucket);
  // }

  let IngredientsDisplay = [];

  if (Object.keys(bucket)[0]) {
    Object.values(bucket).forEach((ing, index) => {
      IngredientsDisplay.push(
        <IngredientDisplay
          key={`b${bucketNumber}id${index}`}
          itemName={ing.itemName}
          use={ing.use}
          _id={ing._id}
          inventory={inventory}
          setInventory={setInventory}
        />
      );
    });
  }

  return (
    <div>
      <AddIngredient
        key={`ai${bucketNumber}`}
        bucketNumber={bucketNumber}
        inventory={inventory}
        setInventory={setInventory}
      />
      {IngredientsDisplay}
    </div>
  );
}

export default InventoryBucket;
