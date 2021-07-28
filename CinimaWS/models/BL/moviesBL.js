const axios = require('axios')
// get all movies
let getAllMovies = () => {
    return new Promise(async (resolve, reject) => {
        let allMovies = await axios.get(`http://localhost:8000/movies`)
        resolve(allMovies.data)
    })
}
// get by id
let getMovieById = (id) => {
    return new Promise(async (resolve, reject) => {
        let movie = await axios.get(`http://localhost:8000/movies/${id}`)
        resolve(movie.data)
    })
}
// delete movie 
let deleteMovie = (id) => {
    return new Promise(async(resolve, reject) => {
        let result = await axios.delete(`http://localhost:8000/movies/${id}`)
        resolve(result.data)
    })
}
// add movie
let addMovie = (movieObj) => {
    return new Promise(async(resolve, reject) => {
        let result = await axios.post(`http://localhost:8000/movies`, movieObj)
        resolve(result.data)
    })
}
// update movie
let updateMovie = (id, movieObj) => {
    return new Promise(async(resolve, reject) => {
        let result = await axios.put(`http://localhost:8000/movies/${id}`, movieObj)
        resolve(result.data)
    })
}
 
module.exports = {updateMovie, addMovie, getMovieById, getAllMovies, deleteMovie}