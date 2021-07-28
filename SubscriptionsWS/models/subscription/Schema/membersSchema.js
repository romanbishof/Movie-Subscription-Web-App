const mongoose = require('mongoose')

const Schema = mongoose.Schema

const membersSchema = new Schema({
    name: String,
    email: String,
    city: String
    
})

module.exports = mongoose.model('members', membersSchema)