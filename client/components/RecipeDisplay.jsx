import React, { useState } from 'react';
import parse from 'html-react-parser';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useInventory, useSetInventory } from '../contexts/InventoryContexts';

function RecipeDisplay(props) {
  const inventory = useInventory();
  const setInventory = useSetInventory();
  console.log('RDrecipline10', props.recipe);
  // Title

  // Picture

  // Info:
  //    cooking itme:
  //    servings:

  // Summary

  // Ingredients

  // Instructions

  // Button

  // const dietLabels = [vegetarian, vegan, glutenFree, dairyFree].reduce((acc, ele, index) => {
  //   if (props[ele] === false) {
  //     acc.push(
  //       <ListGroup.Item
  //         key={`rddl${index}`}
  //         style={{ textTransform: 'capitalize', textDecorationLine: 'line-through' }}
  //       >
  //         {ele}
  //       </ListGroup.Item>
  //     );
  //   } else if (props[ele] === true) {
  //     acc.push(
  //       <ListGroup.Item key={`rddl${index}`} style={{ textTransform: 'capitalize' }}>
  //         {ele}
  //       </ListGroup.Item>
  //     );
  //   }
  //   return acc;
  // }, []);

  return (
    <div>
      <Card className="p-3" style={{ flex: 1 }}>
        <Card.Header>
          <strong>{props.recipe.title}</strong>
        </Card.Header>
        <Card.Img
          variant="top"
          src={props.recipe.image}
          style={{ position: 'center', maxWidth: '50px' }}
          alt="Food Img"
        />
        <Card.Body>
          <Card.Text>
            <strong>Ingredients: </strong>
            {parse(props.recipe.ingredients)}
          </Card.Text>
          <Card.Text>
            <strong>Instructions: </strong>
            {parse(props.recipe.instructions)}
          </Card.Text>
          {/* <ListGroup>
          <ListGroup.Item></ListGroup.Item>
        </ListGroup> */}
        </Card.Body>
        {/* <Card.Footer>
        <ListGroup horizontal>{dietLabels}</ListGroup>
      </Card.Footer> */}
      </Card>
    </div>
  );
}

export default RecipeDisplay;
