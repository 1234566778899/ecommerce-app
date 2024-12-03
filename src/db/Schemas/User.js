const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: String,
    lname: String,
    email: String,
    uid: String,
    cellphone: String
}, {
    timestamps: true
})

module.exports = model('user', UserSchema)