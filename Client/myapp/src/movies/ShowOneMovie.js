import React, { useContext, useEffect } from 'react';
import { MoviesContext } from '../contexAPI/MoviesContex';

const ShowOneMovie = () => {
    const [movies, setMovies] = useContext(MoviesContext)
    let movie = JSON.parse(localStorage.getItem("oneMovieObj"))
    let date = new Date(movie.premiered).getFullYear()
    return (
        <div>
            <h3>{movie.name}, {date}</h3>

            <b><label>Genres: </label></b>{movie.genres.join()}
            <br/>
            <img src= {movie.image} alt={movie.name}></img>

            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default ShowOneMovie;