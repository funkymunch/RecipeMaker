import React, { useState, useEffect } from 'react';
import InventoryBucket from '../components/InventoryBucket';
import axios from 'axios';

function InventoryContainer() {
  const [inventory, setInventory] = useState({
    hanDUMP: { itemName: 'hanDUMP', bucketNumber: 1, use: true, _id: 1 },
    hanjiDUMP: { itemName: 'hanjiDUMP', bucketNumber: 1, use: true, _id: 2 },
  });

  // this works like componentDidMount and willMount
  // this is will give us the initial state of the inventory
  // useEffect(() => {
  //   axios.get('./api/inventory').then((res) => {
  //     // this is a sample data structure from the server: {carrot: {itemName: carrot: bucketNumber: 1, use: true, _id: 1234}}
  //     setBuckets(res.data);
  //   });
  // }, []);

  const InventoryBuckets = [];
  for (let i = 0; i < 3; i++) {
    const bucket = Object.values(inventory).reduce((acc, ele) => {
      if (ele.bucketNumber == i) {
        acc[ele.itemName] = ele;
      }
      return acc;
    }, {});
    InventoryBuckets.push(
      <InventoryBucket
        key={`ib${i}`}
        bucket={bucket}
        bucketNumber={i}
        inventory={inventory}
        setInventory={setInventory}
      />
    );
  }

  return (
    // three buckets with data passed down for each bucket
    <div>{InventoryBuckets}</div>
  );
}

export default InventoryContainer;
