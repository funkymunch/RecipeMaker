import React, { Component } from 'react';
import InventoryContainer from './InventoryContainer';
import RecipesContainer from './RecipesContainer';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <InventoryContainer />
        {/* <RecipesContainer /> */}
      </div>
    );
  }
}
export default MainContainer;
