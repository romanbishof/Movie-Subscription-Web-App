const express = require('express')
const moviesRouter = express.Router()
const moviesBL = require('../models/BL/moviesBL')

// all members
moviesRouter.route('/').get(async(req, resp) => {
    let movies = await moviesBL.getAllMovies()
    return resp.json(movies)
})
// member by id
moviesRouter.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let movie = await moviesBL.getMovieById(id)
    return resp.json(movie)
})
// delete member
moviesRouter.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let result = await moviesBL.deleteMovie(id)
    return resp.json(result)
})
// add member
moviesRouter.route('/').post(async(req, resp) => {
    let newMovie = req.body
    let result = await moviesBL.addMovie(newMovie)
    return resp.json(result)
})

// update member
moviesRouter.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let updatedMovie = req.body
    let result = await moviesBL.updateMovie(id, updatedMovie)
    return resp.json(result)
})

module.exports = moviesRouter