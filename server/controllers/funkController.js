const fetch = require('node-fetch');

const funkController = {};

funkController.getRecipes = (req, res, next) => {
  console.log('Hit getRecipes!!', req.body);
  
  // free api keys!
  let keyIndex = 2;
  const apiKeys = [
    '15b3f4802c0e4563b2bded336d9fe84e',
    'f470747f26984405bc334aa91f91c166',
    '2cb2288f93d441528099bd7df94f6b1a',


    // put keys here
  ];
  const howManyRecipes = 2;
  
  // inventory is sent on object, ex. {"carrot": {"itemName": "carrot", "bucketNumber": 0, "use": false}, "egg": {"itemName": "egg", "use": true, "bucketNumber": 1}}
  let itemsNames = [];
  const itemsObj = req.body;
  const items = Object.keys(itemsObj);
  
  if (!items.length) {
    res.locals.recipes = 'No ingredients provided';
    return next();
  }
  
  //use items marked {"use": true} first
  const useThese = items.filter(el => itemsObj[el]['use']);  
  console.log('useThese:', useThese)
  
  //otherwise, use first non-empty bucket
  if (!useThese.length) {
    for (let i = 0; i < 3; i++) {
      const bucket = items.filter(el => itemsObj[el]['bucketNumber'] === i);
      if (bucket.length) {
        itemsNames = bucket;
        break;
      }
    }
    
    if (!itemsNames.length) throw new Error('No items to use!');
    
  } else {
    itemsNames = useThese;
  }
  
  const commaItems = itemsNames.join(',+');
  
  console.log('commaItems:', commaItems);
  
  if (!commaItems.length) throw new Error('No items to use!');
  
  // async section, IIFE runs immediately
  (async function fetchRecipes () {
    try {
      const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${commaItems}&number=${howManyRecipes}&ranking=2&apiKey=${apiKeys[keyIndex]}`;
      
      // get recipes list for provided ingredients
      const recipesListData = await fetch(url);
      const recipesList = await recipesListData.json();

      console.log('recipesList:', recipesList)
      
      if (!Array.isArray(recipesList)) throw new Error('Invalid recipes list');
      
      
      // get recipe IDs
      const recipeIDs = recipesList.map(el => el.id);
      console.log('recipeIDs:', recipeIDs)    
      
      // build return recipe object
      const recipeObj = {};
      for (const rec of recipesList) {
        recipeObj[rec.id] = {id: rec.id, title: rec.title, image: rec.image}
      }
      
      // get detailed recipe instructions by recipe ID,
      // may need to implement a queue or safeguard to prevent
      // too many concurrent fetch requests with map,
      // using a for loop could work too
      const recipes = await Promise.all(recipeIDs.map(async ID => {
        const urlAnalyzed = `https://api.spoonacular.com/recipes/${ID}/analyzedInstructions?apiKey=${apiKeys[keyIndex]}`;
        const recipe = await fetch(urlAnalyzed);
        const recipeJSON = await recipe.json();
        
        return {idRecipe: ID, recipe: recipeJSON};
      }
      ));
      
      // get ingredient lists by recipe ID
      const ingredientsAll = await Promise.all(recipeIDs.map(async ID => {
        const urlAnalyzed = `https://api.spoonacular.com/recipes/${ID}/ingredientWidget.json?apiKey=${apiKeys[keyIndex]}`
        const recipeIngredients = await fetch(urlAnalyzed);
        recipeIngredientsJSON = await recipeIngredients.json();
        return {idIngredients: ID, ingredients: recipeIngredientsJSON};
      }
      ));
      
      // add steps (and sub-recipe name) to recipe text
      console.log('recipes:', recipes)
      recipes.forEach(el => {
        let recipeText = '';
        const {recipe, idRecipe} = el;
        if (recipe.length) {
          for (const dish of recipe) {
            console.log('dish:', dish)
            if (dish.name.length) recipeText += `${dish.name}\n\n`;
            recipeText += dish.steps.map(((stepObj, i) => `${i + 1}. ${stepObj.step}`)).join('\n\n');  
          }
        }
        console.log('recipeText:', recipeText)
        if (recipeText.length) {
          recipeObj[idRecipe]['instructions'] = recipeText; 
        }
      });
      
      console.log('recipeObj before ingredients:', recipeObj)
      
      // add ingredients to recipe text
      console.log('all ingredients:', ingredientsAll)
      ingredientsAll.forEach(el => {
        let ingredientsText = '';
        const {ingredients, idIngredients} = el;
        if (typeof ingredients === 'object') {
          if (ingredients.ingredients) {
            for (const ing of ingredients.ingredients) {
              if (ing.name.length) {
                ingredientsText += `${ing.name}`;
                ingredientsText += `, ${ing.amount.us.value} ${ing.amount.us.unit}\n\n`;
              }
            } 
          }    
        }
        if (ingredientsText.length) {
          recipeObj[idIngredients]['ingredients'] = ingredientsText;
        }
      });
      
      console.log('recipeobj to return:', recipeObj)  
      res.locals.recipes = recipeObj;        
    }
    catch (err) {
      const error = {
        log: 'Error in getRecipes controller',
        status: 500,
        message: { err: err.message},
      };
      return next(error);
    }
    
    return next();
  })();
};


module.exports = funkController;

