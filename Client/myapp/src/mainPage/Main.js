import React, {useState, useEffect, useContext} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Utils from '../login/utils';

import { useHistory} from 'react-router-dom';


// component
import Movies from '../movies/Movies';
import Subscription from '../subscription/Subscription';
import Users from '../users/Users';

// context
// import { MoviesContext } from '../contexAPI/MoviesContex';
// import { UsersContext } from '../contexAPI/UsersContex';
const Main = () => {

    let history = useHistory();

    const [userId, setUserId] = useState('')
    // const [movies, setMovies] = useContext(MoviesContext)
    // const [users, setUsers] = useContext(UsersContext)
    
    useEffect( () => {
        let id = sessionStorage.getItem('userId')
        setUserId(id)
        // load movies from data base
        // let respMovies = await Utils.getMovies()
        // setMovies(respMovies.data)
        
    },[])
    
    const logOut = () => {
        // back to login page
        sessionStorage.setItem('userId', '')
    }
    
    
    return (
        <div>
            <h1>Movies - Subscriptions Web Site</h1>
            {/* load movies component */}
            <Link to="/main/movies">
                <input type="button" value="Movies"></input>
            </Link>
            
            <Link to="/main/subscription">
                <input type="button" value="Subscription"></input>
            </Link>

            <Link to='/main/users'>
                <input type="button" value="User Manegment"></input>
            </Link>

            <Link to='/'>
                <input type="button" value="Log Out" onClick={logOut}></input>
            </Link>

            <br/>
            <br/>
            <br/>

            <Switch>
                <Route path="/main/movies" component={Movies}></Route>
                <Route path="/main/subscription" component={Subscription}></Route>
                <Route path="/main/users" component={Users}></Route>
            </Switch>
        </div>
    );
};

export default Main;