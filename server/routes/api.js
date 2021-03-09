const express = require('express');
const funkController = require('../controllers/funkController');
const dbController = require('../controllers/dbController');

const router = express.Router();

router.get('/inventory', dbController.findItems);

router.post('/inventory', dbController.createItem);

router.put('/inventory', dbController.updateItem);

router.delete('/inventory', dbController.deleteItemMany);

router.post('/recipes', funkController.getRecipes, (req, res) => res.status(200).json(res.locals.recipes));

module.exports = router;
