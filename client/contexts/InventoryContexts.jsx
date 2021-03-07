/**
 * ************************************
 *
 * @module  InventoryContexts
 * @author  Han Chae && Hanji Chen
 * @date    March 6, 2021
 * @description This is React Hooks. This state management basically works like the store in Redux.
 *
 * ************************************
 */

import React, { useContext, useState } from 'react';

const InventoryContext = React.createContext();
const SetInventoryContext = React.createContext();

function useInventory() {
  return useContext(InventoryContext);
}
function useSetInventory() {
  return useContext(SetInventoryContext);
}

function InventoryProvider({ children }) {
  const [inventory, setInventories] = useState({
    hanDUMP: { itemName: 'hanDUMP', bucketNumber: 1, use: true, _id: 1 },
    hanjiDUMP: { itemName: 'hanjiDUMP', bucketNumber: 1, use: true, _id: 2 },
  });

  function setInventory(newState) {
    setInventories(newState);
  }

  return (
    <InventoryContext.Provider value={inventory}>
      <SetInventoryContext.Provider value={setInventory}>{children}</SetInventoryContext.Provider>
    </InventoryContext.Provider>
  );
}

export { InventoryProvider, useInventory, useSetInventory };
