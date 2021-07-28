const mongoose = require('mongoose')

const Schema = mongoose.Schema

const moviesSchema = new Schema({
    name: String,
    genres: [String],
    image: String,
    premiered: Date
    
})

module.exports = mongoose.model('movies', moviesSchema)