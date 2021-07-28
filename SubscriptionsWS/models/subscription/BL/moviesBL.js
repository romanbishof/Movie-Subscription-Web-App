const Movie = require('../Schema/moviesSchema')

// add movie
let addMovie = (movie) => {
    return new Promise((resolve, reject) => {
        let newMovie = new Movie({
            name: movie.name,
            genres: movie.genres,
            image: movie.image,
            premiered: movie.premiered
        })

        newMovie.save((err,data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// get all movies
let getAllMovies = () => {
    return new Promise((resolve, reject) => {
        Movie.find({}, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
// get movie by id
let getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        Movie.findById(id, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// update movie
let updateMovie = (id, movieObj) => {
    return new Promise((resolve, reject) => {
        Movie.findByIdAndUpdate(id, {
            name: movieObj.name,
            genres: movieObj.genres,
            image: movieObj.image,
            premiered: movieObj.premiered
        }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("movie updated")
            }
        })
    })
}

// delete movie
let deleteMovie = (id) => {
    return new Promise((resolve, reject) => {
        Movie.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("movie deleted")
            }
        })
    })
}

module.exports = {getMovieById, addMovie, getAllMovies ,updateMovie , deleteMovie}