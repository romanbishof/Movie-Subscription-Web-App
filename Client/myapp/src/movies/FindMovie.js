import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MoviesContext } from '../contexAPI/MoviesContex';

import Utils from '../login/utils';

const FindMovie = (props) => {

    const [movies, setMovies] = useContext(MoviesContext)
    let history = useHistory()

    let movie = movies.find(movie => movie.name === props.match.params.movieName)
    
    const editMovie = () => {
        history.push(`/main/movies/editmovie/${movie._id}`)
    }

    const deleteMovie = async() => {
        let resp = await Utils.deleteMovie(`http://localhost:8080/movies/${movie._id}`)
        console.log(resp.data);

        let index = movies.findIndex(movie => movie._id === movie._id)
        let newMovieArray = movies.splice(index, 1)

        setMovies([newMovieArray])

    }
    
    return (
        <div>
            <br/>
                <b>
                    {movie.name} ,{movie.premiered.slice(0,4)}
                </b>
                <br/>
                genres: {movie.genres.join()}<br/><br/>

                <img src= {movie.image} alt={movie.name}></img>
                <br/>
                <input type="button" value="Edit" onClick={editMovie}></input>
                <input type="button" value="Delete" onClick={deleteMovie}></input>
                <br/>
                <br/>
                <br/>
                <br/>
        </div>
    );
}
export default FindMovie;