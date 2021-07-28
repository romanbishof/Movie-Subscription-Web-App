const mongoose = require('mongoose')

const Schema = mongoose.Schema

const subscriptionSchema = new Schema({
    memberId: String,
    movies: [
        {
            _id: false,
            movieId: String,
            date: Date
        }
    ]
})

module.exports = mongoose.model('subscriptions', subscriptionSchema)