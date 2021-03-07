/**
 * ************************************
 *
 * @module  InventoryContainer
 * @author  Han Chae && Hanji Chen
 * @date    March 6, 2021
 * @description
 *
 * ************************************
 */

import React from 'react';
import InventoryBucket from '../components/InventoryBucket';
import { useInventory, useSetInventory } from '../contexts/InventoryContexts';

function InventoryContainer() {
  const inventory = useInventory();
  const setInventory = useSetInventory();

  // this works like componentDidMount and willMount
  // this is will give us the initial state of the inventory
  // useEffect(() => {
  //   axios.get('./api/inventory').then((res) => {
  //     // this is a sample data structure from the server: {carrot: {itemName: carrot: bucketNumber: 1, use: true, _id: 1234}}
  //     setInventory(res.data);
  //   });
  // }, []);

  if (inventory === null) {
    return 'Loading...';
  }

  const InventoryBuckets = [];

  for (let i = 0; i < 3; i++) {
    const bucket = Object.values(inventory).reduce((acc, ele) => {
      if (ele.bucketNumber == i) {
        acc[ele.itemName] = ele;
      }
      return acc;
    }, {});
    InventoryBuckets.push(<InventoryBucket key={`ib${i}`} bucket={bucket} bucketNumber={i} />);
  }

  return (
    // three buckets with data passed down for each bucket
    <div>{InventoryBuckets}</div>
  );
}

export default InventoryContainer;
