const { Schema, model } = require('mongoose');

const OrderSchema = Schema({
    name: String,
    cellphone: String,
    address: String,
    email: String,
    products: [
        {
            name: String,
            quantity: Number,
            price: Number
        }
    ],
    status: String
}, {
    timestamps: true
})

module.exports = model('order', OrderSchema)

