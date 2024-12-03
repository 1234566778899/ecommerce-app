const { Schema, model } = require('mongoose');

const CategorySchema = Schema({
    name: String,
    description: String
}, {
    timestamps: true
})

module.exports = model('category', CategorySchema)