const Item = require('../itemModels');

const dbController = {

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

        //modify so that it takes in 

        // {
        //     _id: ""
        // }

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

    deleteItemMany(req, res) {
        const ids = ["6043c1f1d645c617b559950a","6043dbcafb29d820292d39e5"]

        Item.deleteMany({ _id: { $in: ids} }, (err, response) => {
            if (err) {
                return res.status(400).json(err)
            } else {
                res.status(200).json(response)
            }
        })
    }








}

module.exports = dbController