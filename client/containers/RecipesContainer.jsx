import axios from 'axios';
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import RecipeDisplay from '../components/RecipeDisplay';

function RecipesContainer() {
  let recipesContain;
  useEffect(() => {
    axios.get('./api/recipes').then((res) => {});
  }, []);

  if (!recipesContain) return 'Loading...';

  const RecipesDisplay = recipesContain.map((recipe, index) => {
    <RecipeDisplay key={`rd${index}`} recipe={recipe} />;
  });
  function MoreRecipes() {
    axios.get('./api/recipes').then((res) => {});
  }

  return (
    <InfiniteScroll dataLength={RecipesDisplay.length} next={MoreRecipes} hasMore={true} loader={<h4>Loading...</h4>}>
      {RecipesDisplay}
    </InfiniteScroll>
  );
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
