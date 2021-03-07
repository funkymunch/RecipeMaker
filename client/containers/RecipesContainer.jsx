import React, { useState, useEffect } from 'react';
import RecipeDisplay from '../components/RecipeDisplay';

function RecipesContainer() {
  let recipesContain;
  useEffect(() => {
    axios.get('./api/recipes').then((res) => {});
  }, []);

  if (!recipesContain) return 'Loading...';

  const RecipesDisplay = recipesContain.map((ele, index) => {
    <RecipeDisplay />;
  });
  return { RecipesDisplay };
}

export default RecipesContainer;

// infiniteScroll = () => {
// // End of the document reached?
//   if (window.innerHeight + document.documentElement.scrollTop
//   === document.documentElement.offsetHeight){

//     let newPage = this.state.page;
//     newPage++;
//     this.setState({
//           page: newPage
//     });
//     this.fetchData(newPage);
//   }
// }
