import React, { useState } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';

// component
import MovieComp from './MovieComp';
import EditMovies from './EditMovies';
import AddMovie from './AddMovie';
import FindMovie from './FindMovie';
import ShowOneMovie from './ShowOneMovie';

const Movies = () => {
    

    const [find, setFind] = useState("")

    let history = useHistory()
    
    const findMovie = () => {
        history.push(`/main/movies/findmovie/${find}`)

    }
    return (
        <div>
            <h2>Movies</h2>
            <br/>

            <Link to="/main/movies/allmovies">
                <input type='button' value="All Movies"></input>
            </Link>

            <Link to ="/main/movies/addmovie">
                <input type='button' value="Add Movie"></input>
            </Link>
            Find Movies: <input type='text' onChange={e => setFind(e.target.value)}></input>
           
            <input type='button' value="Find" onClick={findMovie}></input>
            

            <br/>

            <Switch>
                <Route path="/main/movies/allmovies" component={MovieComp}></Route>
                <Route path="/main/movies/editmovie" component={EditMovies}></Route>
                <Route path="/main/movies/addmovie" component={AddMovie}></Route>
                <Route path="/main/movies/findmovie/:movieName" component={FindMovie}></Route>
                <Route path="/main/movies/showOneMovie" component={ShowOneMovie}></Route>
            </Switch>
            
        </div>
    );
};

export default Movies;