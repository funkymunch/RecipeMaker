const Item = require('../itemModels');

function frontEndParser(input) {
  const keyName = Object.keys(input)[0];
  return input[keyName];
}

function mongoToFrontEnd(input) {
  const newObj = {};
  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    newObj[element.itemName] = element;
  }
  return newObj;
}

const dbController = {
  // Create new item
  createItem(req, res) {
    const newItem = frontEndParser(req.body);
    console.log('dbContrline25', req.body);
    Item.create(newItem, (err, createdDoc) => {
      if (err) {
        return res.status(400).json(err);
      } else {
        res.status(200).json(createdDoc);
      }
    });
  },

  // Get all items

  findItems(req, res) {
    Item.find({}, (err, response) => {
      if (err) {
        return res.status(400).json(err);
      } else {
        const parsed = mongoToFrontEnd(response);

        res.status(200).json(parsed);
      }
    });
  },

  // update existing item

  updateItem(req, res) {
    const newItem = frontEndParser(req.body);

    const updatedItem = {
      _id: newItem._id,
    };

    Item.updateOne(updatedItem, newItem, (err, response) => {
      if (err) {
        return res.status(400).json(err);
      } else {
        return res.status(200).json(response);
      }
    });
  },

  // delete item

  deleteItemMany(req, res) {
    const ids = req.body;
    console.log(ids);
    Item.deleteMany({ _id: { $in: ids } }, (err, response) => {
      if (err) {
        return res.status(400).json(err);
      } else {
        res.status(200).json(response);
      }
    });
  },
};

module.exports = dbController;
