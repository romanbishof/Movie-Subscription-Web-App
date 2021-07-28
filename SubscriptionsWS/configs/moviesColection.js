const axios = require('axios')
const moviesBL = require('../models/subscription/BL/moviesBL')


let getMovies = async () => {
    // getting all the movies

    let resp = await axios.get(`https://api.tvmaze.com/shows`)
    let movies = resp.data

    // send each movie to the dataBase

    movies.forEach(async(movie) => {

        let newMovie = {
            name: movie.name,
            genres: movie.genres,
            image: movie.image.medium,
            premiered: movie.premiered
        }

        await moviesBL.addMovie(newMovie)
    })
}

getMovies()