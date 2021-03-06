// const db = require('../models/funkModels');
const { response } = require('express');
const fetch = require('node-fetch');


const funkController = {};

funkController.getInventory = (req, res, next) => {
  console.log('Hit getInventory!!');
  
  //for non-DB testing
  return next();
  
  // // db.query here
  // const query = 'SELECT .....';
  
  // db.query(query)
  // .then(data => {
  //   res.locals.items = data.rows;
  //   console.log(data.rows);
  //   next()
  // })
  // .catch(e => {
  //   return next({log: 'Error in getItems middleware', message: {err: e}});
  // }); 
};



funkController.createItem = (req, res, next) => {
  
  //  item info on req.body -----> {item1Name: {itemName: string, bucketNo: num, use: true/false}}
  
  console.log('Hit createItem!!');
  
  
  
  const items = Object.keys(req.body);
  // console.log('items:', items)
  const queryItem = req.body[items[0]];
  console.log('queryItem:', queryItem)
  
  
  //for non-DB testing
  return next();
  
  // // db.query here
  // const query = '.....';
  
  // db.query(query)
  // .then(data => {
  //   res.locals.status = data;
  //   console.log(data);
  //   next()
  // })
  // .catch(e => {
  //   return next({log: 'Error in createItem middleware', message: {err: e}});
  // }); 
};


funkController.updateItem = (req, res, next) => {
  
  //   req.body -----> {{itemName: {bucketNo: num, use: true/false}}
  
  
  console.log('Hit updateItem!!');
  
  
  
  const items = Object.keys(req.body);
  // console.log('items:', items)
  const queryItem = req.body[items[0]];
  console.log('queryItem:', queryItem)
  
  
  
  //for non-DB testing
  return next();
  
  // // db.query here
  // const query = '.....';
  
  // db.query(query)
  // .then(data => {
  //   res.locals.status = data;
  //   console.log(data);
  //   next()
  // })
  // .catch(e => {
  //   return next({log: 'Error in updateItem middleware', message: {err: e}});
  // }); 
};



funkController.deleteItems = (req, res, next) => {
  
  //   req.body -----> {itemName: {bucketNo: num, use: true/false}, item2name:{...}}
  
  console.log('Hit deleteItems!!', req.body);
  
  
  
  // const items = Object.keys(req.body);
  // // console.log('items:', items)
  
  // const queryItem = items.map(el => {
  //   return {"_id": req.body[el]["_id"]}
  // });
  
  // console.log('queryItem:', queryItem)
  // req.body = queryItem;
  
  // console.log('body', req.body);
  
  //for non-DB testing
  return next();
  
  
  
  // // db.query here
  // const query = '.....';
  
  // db.query(query)
  // .then(data => {
  //   res.locals.status = data;
  //   console.log(data);
  //   next()
  // })
  // .catch(e => {
  //   return next({log: 'Error in deleteItems middleware', message: {err: e}});
  // }); 
};


funkController.getRecipes = async (req, res, next) => {
  console.log('Hit getRecipes!!', req.body);
  
  //   req.body -----> {itemName: {bucketNo: num, use: true/false}, item2name:{...}}
  
  const items = Object.keys(req.body).slice(0,1);
  
  console.log('items for recipe:', items)
  
  const commaItems = items.join(',+');
  
  console.log('commaItems:', commaItems)
  
  let keyIndex = 0;
  const apiKeys = ['15b3f4802c0e4563b2bded336d9fe84e', 'f470747f26984405bc334aa91f91c166', '2cb2288f93d441528099bd7df94f6b1a'];
  
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${commaItems}&number=2&apiKey=${apiKeys[keyIndex]}`;
  
  // fetch(url)
  // .then(data => data.json())
  // .then(data => {
  //   console.log(data);
  //   const recipesList = data;
  // })
  // .catch(err => {
  //   console.log(err);
  // })
  //
  const recipesListData = await fetch(url);
  const recipesListX = recipesListData.json();
  
  console.log('recipesListX:', recipesListX)
  
  //****************** */
  // const recipesList = [
  //   {
  //     id: 1090283,
  //     title: 'Forest fruit & banana smoothie',
  //     image: 'https://spoonacular.com/recipeImages/1090283-312x231.jpg',
  //     imageType: 'jpg',
  //     usedIngredientCount: 1,
  //     missedIngredientCount: 2,
  //     missedIngredients: [ [Object], [Object] ],
  //     usedIngredients: [ [Object] ],
  //     unusedIngredients: [],
  //     likes: 1
  //   },
  //   {
  //     id: 837261,
  //     title: 'Forest Fruit & Banana Smoothie',
  //     image: 'https://spoonacular.com/recipeImages/837261-312x231.jpg',
  //     imageType: 'jpg',
  //     usedIngredientCount: 1,
  //     missedIngredientCount: 2,
  //     missedIngredients: [ [{
  //       "aisle": "Baking",
  //       "amount": 1.0,
  //       "id": 18371,
  //       "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
  //       "meta": [],
  //       "name": "baking powder",
  //       "original": "1 tsp baking powder",
  //       "originalName": "baking powder",
  //       "unit": "tsp",
  //       "unitLong": "teaspoon",
  //       "unitShort": "tsp"
  //     }], [{
  //       "aisle": "Baking",
  //       "amount": 1.0,
  //       "id": 18371,
  //       "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
  //       "meta": [],
  //       "name": "baking powder",
  //       "original": "1 tsp baking powder",
  //       "originalName": "baking powder",
  //       "unit": "tsp",
  //       "unitLong": "teaspoon",
  //       "unitShort": "tsp"
  //     }] ],
  //     usedIngredients: [ [{
  //       "aisle": "Baking",
  //       "amount": 1.0,
  //       "id": 18371,
  //       "image": "https://spoonacular.com/cdn/ingredients_100x100/white-powder.jpg",
  //       "meta": [],
  //       "name": "baking powder",
  //       "original": "1 tsp baking powder",
  //       "originalName": "baking powder",
  //       "unit": "tsp",
  //       "unitLong": "teaspoon",
  //       "unitShort": "tsp"
  //     }] ],
  //     unusedIngredients: [],
  //     likes: 0
  //   }
  // ]
  
  
  // const recipeIDs = recipesList.map(el => el.id);
  // console.log('recipeIDs:', recipeIDs)
  
  // const recipes = [];
  
  // recipeIDs.forEach(el => {
    
  //   const urlAnalyzed = `https://api.spoonacular.com/recipes/${el}/analyzedInstructions?apiKey=${apiKeys[keyIndex]}`;
  //   console.log('urlAnalyzed:', urlAnalyzed)    
  //   const recipesData = await fetch(urlAnalyzed);
  //   recipes.push(recipesData) 
  // });
  
  // console.log('recipes:', recipes)
  //********************* */
  
  //for non-API testing
  return next();
  
  
  // API REQUEST LOGIC / ALGO
  
  // // HIT API here
  
};



module.exports = funkController;



// starWarsController.getCharacters = (req, res, next) => {
//   // write code here
//   const query = 'SELECT p.*, s.name AS species, h.name AS homeworld FROM people p LEFT OUTER JOIN species s ON s._id = p.species_id LEFT OUTER JOIN planets h ON h._id = p.homeworld_id';

//   db.query(query)
//   .then(data => {
//     res.locals.people = data.rows;
//     console.log(data.rows);
// // return next();
//   })
//   // .then(() => {
//   //   console.log('GETFILMS HIT');
//   //   console.log(res.locals.people[0]);
//   //   return next();
//   // })
//   .catch(e => {
//     return next({log: 'Error in getCharacters middleware', message: {err: e}});
//   });

// };

// starWarsController.getFilms = (req, res, next) => {
//   console.log('GETFILMS HIT');
//   const promises = [];
//   for (let i = 1; i < 5; i++) {
//     const films = 'SELECT f.title, f._id AS id FROM films f JOIN people_in_films pf ON pf.person_id = $1 AND pf.film_ID = f._ID';
//     const result = db.query(films, [i])
//     .then((data) => {
//       res.locals.people[i]['films'] = data.rows;
//     });
//     promises.push(new Promise((res, rej) => res(result)));
//   }
//   Promise.all(promises)
//   .then(data => console.log('DATA', data));

// };


// starWarsController.getSpecies = (req, res, next) => {
//   // write code here
//   const id = req.query.id;
//   const sql = 'SELECT s.name, s.classification, s.average_height, s.average_lifespan, s.language, h.name AS homeworld FROM species s LEFT OUTER JOIN planets h ON s.homeworld_id = h._id WHERE s._id = $1';
//   //'${id}'`;

//   db.query(sql, [id])
//   .then((data) => {
//     //console.log(data.rows)
//     res.locals.speciesData = data.rows;
//     next();
//   })
//   .catch((e) => {
//     next({log: 'Error in getSpecies middleware', message: {err: e}});
//   });


//   //save the returned data in res.locals.species (maybe?)
//   //we will build our response and pass in our res.locas.species as a JSON object
// };



// starWarsController.getHomeworld = (req, res, next) => {
//   // write code here
//   const id = req.query.id;
//   //declare a sting called sq where we will save our sql query
//   const sql = 'SELECT h.name, h.rotation_period, h.orbital_period, h.diameter, h.climate, h.gravity, h.terrain, h.surface_water, h.population FROM planets h WHERE h._id = $1';
//   db.query(sql, [id])
//   .then((data) => {
//     //console.log(data.rows)
//     res.locals.homeworldData = data.rows;
//     next();
//   })
//   .catch((e) => {
//     next({log: 'Error in getHomeworld middleware', message: {err: e}});
//   });
// };

// starWarsController.getFilm = (req, res, next) => {
//   // write code here

//   next();
// };

// starWarsController.addCharacter = (req, res, next) => {
//   // write code here

//   next();
// };

// module.exports = starWarsController;
