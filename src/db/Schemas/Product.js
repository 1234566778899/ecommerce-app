const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: String,
    description: String,
    files: [String],
    category: String,
    price: Number,
    priceCompare: Number,
    cost: Number,
    labels: [String],
    active: { type: Boolean, default: true }
}, {
    timestamps: true
})

module.exports = model('product', ProductSchema)