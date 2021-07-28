import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Utils from '../login/utils';

import { MoviesContext } from '../contexAPI/MoviesContex';
import WhoWatched from './WhoWatched';

const MovieComp = () => {

    const [movies, setMovies] = useContext(MoviesContext)

    // let genresString = JSON.parse(localStorage.getItem('genresString'))
    // let genresArray = JSON.parse(localStorage.getItem('genresArray'))

    let history = useHistory()
    // useEffect(async ()=> {
    //     let updatedMovieArray = await Utils.getMovies()
    //     setMovies(updatedMovieArray.data)
    // },[movies])

    let movie = movies.map((movie, index) => {

        let year = new Date(movie.premiered).getFullYear()

        const editMovie = () => {
            localStorage.setItem("movieObj", JSON.stringify(movie))
            history.push(`/main/movies/editmovie`)
        }

        const deleteMovie = async() => {
            console.log("current arr", movies);
            let newMovieArray = movies.filter(obj => obj._id !== movie._id)


            setMovies(newMovieArray)
            // console.log(movie._id);
            await Utils.deleteMovie(`http://localhost:8080/movies/${movie._id}`)


            history.push('/main/movies/allmovies')
        }

        return (
            <div key= {index}>
                <br/>
                <b>
                    {movie.name} ,{year}
                </b>
                <br/>
                genres: {movie.genres.join()}<br/><br/>
                <span></span>
                <div>
                    
                    <WhoWatched style="" movieId={movie._id}></WhoWatched>

                </div>
                <img src= {movie.image} alt={movie.name}></img>
                <br/>
                <input type="button" value="Edit" onClick={editMovie}></input>
                <input type="button" value="Delete" onClick={deleteMovie}></input>
            </div>
        )
    })
    
    return (
        <div>
            {movie}
        </div>
    );
};

export default MovieComp;