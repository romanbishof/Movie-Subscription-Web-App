import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MoviesContext } from '../contexAPI/MoviesContex';
import Utils from '../login/utils';

const AddMovie = () => {

    let history = useHistory()

    const [movies, setMovies] = useContext(MoviesContext)

    const [name, setName] = useState("")
    const [genres, setGenres] = useState("")
    const [image, setImage] = useState("")
    const [premiered, setPremiered] = useState("")

    const saveNewMovie = async () => {
        console.log("in save movie");
        let newMovie = {
            
            name: name,
            genres: genres.split(','),
            image: image,
            premiered: premiered
        }

        let resp = await Utils.saveMovie(newMovie)
        setMovies(resp.data)
        console.log(resp.data);

        history.push('/main/movies/allmovies')
        
    }

    const cancelNewMovie = () => {
        
        history.push('/main/movies/allmovies')
    }
    
    return (
        <div>
            <br/>
            <br/>
            Name:<input type='text' onChange={e => setName(e.target.value)}></input><br/>
            Genres:<input type='text' onChange={e => setGenres(e.target.value)}></input><br/>
            image url:<input type='text' onChange={e => setImage(e.target.value)}></input><br/>
            Premired:<input type='text' onChange={e => setPremiered(e.target.value)}></input><br/>
            <input type="button" value="save" onClick={saveNewMovie}></input>
            <input type="button" value="cancel" onClick={cancelNewMovie}></input>
        </div>
    );
};

export default AddMovie;