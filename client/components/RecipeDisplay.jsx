/**
 * ************************************
 *
 * @module  RecipeDisplay
 * @author  Han Chae && Hanji Chen
 * @date    March 6, 2021
 * @description
 *
 * ************************************
 */

import React, { useState } from 'react';
import parse from 'html-react-parser';
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  const dietLabels = [vegetarian, vegan, glutenFree, dairyFree].reduce((acc, ele, index) => {
    if (props[ele] === false) {
      acc.push(
        <ListGroup.Item
          key={`rddl${index}`}
          style={{ textTransform: 'capitalize', textDecorationLine: 'line-through' }}
        >
          {ele}
        </ListGroup.Item>
      );
    } else if (props[ele] === true) {
      acc.push(
        <ListGroup.Item key={`rddl${index}`} style={{ textTransform: 'capitalize' }}>
          {ele}
        </ListGroup.Item>
      );
    }
    return acc;
  }, []);

  return (
    <Card>
      <Card.Header>
        <strong>{props.Title}</strong>
      </Card.Header>
      <Card.Image variant="top" src={props.Image} alt="Food Img" />
      <Card.Body>
        <Card.Text>
          <strong>Summary: </strong>
          {parse(props.Summary)}
        </Card.Text>
        <Card.Text>
          <strong>Instructions: </strong>
          {parse(props.Instructions)}
        </Card.Text>
        <ListGroup>
          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <ListGroup horizontal>{dietLabels}</ListGroup>
      </Card.Footer>
    </Card>
  );
}
export default RecipeDisplay;
