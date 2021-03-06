const express = require('express');
const funkController = require('../controllers/funkController');

const router = express.Router();

router.get('/inventory', funkController.getInventory,
(req, res) => res.status(200).json(res.locals.items));

router.post('/inventory',
funkController.createItem,
(req, res) => res.status(200).json(res.locals.status)
);

router.put('/inventory',
funkController.updateItem,
(req, res) => res.status(200).json(res.locals.status)
);

router.delete('/inventory',
funkController.deleteItems,
(req, res) => res.status(200).json({})
);

router.get('/recipes',
funkController.getRecipes,
(req, res) => res.status(200).json(res.locals.recipes)
);

module.exports = router;

// itemController.createItem
// .findItems
// .updateItem
// .deleteItem

