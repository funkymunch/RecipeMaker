const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const itemSchema = new Schema({
    itemName: { type: String, required: true },
    bucketNumber: { type: Number, required: true },
    use: { type: Boolean, required: true }
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
