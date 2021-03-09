const express = require('express');
const funkController = require('../controllers/funkController');
const dbController = require('../controllers/dbController');

const router = express.Router();

router.get('/inventory', dbController.findItems);

// router.get('/inventory', funkController.getInventory, (req, res) => res.status(200).json(res.locals.items));

router.post('/inventory', dbController.createItem);

// router.post('/inventory', funkController.createItem, (req, res) => res.status(200).json(res.locals.status));

router.put('/inventory', dbController.updateItem);

// router.put('/inventory',  funkController.updateItem, (req, res) => res.status(200).json(res.locals.status));

router.delete('/inventory', dbController.deleteItemMany);

// router.delete('/inventory', funkController.deleteItems, (req, res) => res.status(200).json({}));

router.post('/recipes', funkController.getRecipes, (req, res) => res.status(200).json(res.locals.recipes));

module.exports = router;
