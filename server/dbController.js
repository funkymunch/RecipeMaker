const { restart } = require('nodemon');
const Item = require('./itemModels');

const ItemController = {

    // Create new item
    createItem(req, res) {

        const newItem = {
            itemName: req.body.itemName,
            bucketNumber: req.body.bucketNumber,
            use: req.body.use
        }

        Item.create(newItem, (err, createdDoc) => {
            if (err) {
                return res.status(400).json(err);
            } else {
                res.status(200).json(createdDoc)
            }
        })
    },

     // Get all items

    findItems(req, res) {
        Item.find({}, (err, response) => {
            if (err) {
                return res.status(400).json(err)
            } else {
                res.status(200).json(response)
            }
        })
    },

    // update existing item

    updateItem(req, res) {

        console.log(req.params.id)
        const oldItem = {
            _id: req.params.id
        }

        Item.updateOne(oldItem, req.body, (err, response) => {
            if (err) {
                return res.status(400).json(err)
            } else {
                return res.status(200).json(response)
            }
        })

    },

    // delete item

    deleteItem(req, res) {
        Item.deleteOne({ _id: req.body._id }, (err, response) => {
            if (err) {
                return res.status(400).json(err)
            } else {
                res.status(200).json(response)
            }
        })
    }








}

module.exports = ItemController