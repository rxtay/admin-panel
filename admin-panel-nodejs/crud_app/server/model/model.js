const mongoose = require('mongoose')

//A schema defines the shape of the documents within that collection and is map to a MongoDB collection.
var schema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    gender: String, 
    status: String
})

const userDB = mongoose.model('userDB', schema)

module.exports = userDB
