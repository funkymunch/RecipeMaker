import React, { useState } from 'react';
<<<<<<< HEAD
import parse from 'html-react-parser';
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
>>>>>>> main
import { useInventory, useSetInventory } from '../contexts/InventoryContexts';

function RecipeDisplay(props) {
  const inventory = useInventory();
  const setInventory = useSetInventory();
  // Title

  // Picture

  // Info:
  //    cooking itme:
  //    servings:

  // Summary

  // Ingredients

  // Instructions

  // Button
<<<<<<< HEAD
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
    <Card>
      <Card.Header>
        <strong>{props.title}</strong>
      </Card.Header>
      <Card.Image variant="top" src={props.image} alt="Food Img" />
      <Card.Body>
        {/* <Card.Text>
          <strong>Summary: </strong>
          {parse(props.Summary)}
        </Card.Text> */}
        <Card.Text>
          <strong>Instructions: </strong>
          {parse(props.instructions)}
        </Card.Text>
        {/* <ListGroup>
          <ListGroup.Item></ListGroup.Item>
        </ListGroup> */}
      </Card.Body>
      {/* <Card.Footer>
        <ListGroup horizontal>{dietLabels}</ListGroup>
      </Card.Footer> */}
    </Card>
=======

  return (
    <div>
      <h1>Title</h1>
    </div>
>>>>>>> main
  );
}
export default RecipeDisplay;
