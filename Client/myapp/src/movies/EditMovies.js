import React, { useContext, useEffect, useState } from 'react';

import Utils from '../login/utils';

import { MoviesContext } from '../contexAPI/MoviesContex';
import { useHistory } from 'react-router';

const EditMovies = () => {

    let history = useHistory()
    
    const [movies, setMovies] = useContext(MoviesContext)
    let movieObj = JSON.parse(localStorage.getItem('movieObj'))

    let date = new Date(movieObj.premiered).toLocaleDateString()


    const [name, setName] = useState(movieObj.name)
    const [genres, setGenres] = useState(movieObj.genres.join())
    const [image, setImage] = useState(movieObj.image)
    const [premiered, setPremiered] = useState(movieObj.premiered)
    

    // let index = movies.findIndex(movie => movie._id === props.match.params.id)
    
    const updateMovie = async () => {

        let id = movieObj._id
        let updatedMovie = {
            _id: id,
            name: name,
            genres: genres.split(','),
            image: image,
            premiered: premiered
        }


        let index = movies.findIndex( elm => elm._id === id)

        movies[index] = updatedMovie

        setMovies(movies)

        await Utils.updateMovie(`http://localhost:8080/movies/${id}`, updatedMovie)
        
        history.push('/main/movies/allmovies')
   
    }


    const cancelEdit = () => {
        history.push('/main/movies/allmovies')
    }
    return (
        <div>
            <h2>Edit Movies: {movieObj.name}</h2>
            <br/>
            <br/>
            Name: <input type="text" defaultValue={movieObj.name} onChange={e => setName(e.target.value)}></input><br/>
            Genres: <input type="text" defaultValue={movieObj.genres.join()} onChange={e => setGenres(e.target.value)}></input><br/>
            image url: <input type="text" defaultValue={movieObj.image} onChange={e => setImage(e.target.value)}></input><br/>
            Premired: <input type="text" defaultValue={date} onChange={e => setPremiered(e.target.value)}></input><br/>
            <input type='button' value='update' onClick={updateMovie}></input>
            <input type='button' value='cancel' onClick={cancelEdit}></input>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default EditMovies;