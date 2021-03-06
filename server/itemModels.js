const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const itemSchema = new Schema({
    itemName: { type: String, required: true, index: true, unique:true },
    bucketNumber: { type: Number, required: true },
    use: { type: Boolean, required: true }

}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
