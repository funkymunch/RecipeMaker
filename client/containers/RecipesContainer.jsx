import React, { useState, useEffect } from 'react';
import RecipeDisplay from '../components/RecipeDisplay';

// class RecipesDisplay extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello</h1>
//       </div>
//  console.log();   );
//   }
// }

function RecipesContainer() {
  const [recipes, setRecipes] = useState('');

  // useEffect(() => {
  //   axios.get('./api/inventory').then((res) => {
  //     // this is a sample data structure from the server: {carrot: {itemName: carrot: bucketNumber: 1, use: true, _id: 1234}}
  //     setBuckets(res.data);
  //   });
  // }, []);
  return null;
}

export default RecipesContainer;
