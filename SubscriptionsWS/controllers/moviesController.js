const express = require('express')
const router = express.Router()
const moviesBL = require('../models/subscription/BL/moviesBL')

// add new movie
router.route('/').post(async(req, resp) => {
    let newMovie = req.body
    let resul = await moviesBL.addMovie(newMovie)
    return resp.json(resul)
})

// get all movies
router.route('/').get(async(req, resp) => {
    let movies = await moviesBL.getAllMovies()
    return resp.json(movies)
})

// get movie by id
router.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let movie = await moviesBL.getMovieById(id)
    return resp.json(movie)
})

// update movie
router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let newMovie = req.body
    let result = await moviesBL.updateMovie(id, newMovie)
    return resp.json(result)
})

// delete movie
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let result = await moviesBL.deleteMovie(id)
    return resp.json(result)
})

module.exports = router