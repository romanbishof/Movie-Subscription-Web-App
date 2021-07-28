import React, { useContext, useState } from 'react';
import { SubscriptionContext } from '../contexAPI/SubscriptionContex';
import { MoviesContext } from '../contexAPI/MoviesContex';

import { Link, Route, useHistory } from 'react-router-dom';


const SubscriptionComponent = (props) => {

    let history = useHistory()

    const [subscriptions, setSubscriptions] = useContext(SubscriptionContext)
    const [movies, setMovies] = useContext(MoviesContext)

    
    
    let id = props.id
    let subscription = subscriptions.find(subObj => subObj.memberId === id)
    // console.log(subscription);
    let item = subscription.movies.map((obj, index) => {

        let movieToDisplay = movies.find(movieObj => movieObj._id === obj.movieId)
        let date = new Date(movieToDisplay.premiered).toLocaleDateString()
        // console.log("movie to display", movieToDisplay);
        // console.log(movieToDisplay);

        let path = `/main/movies/showOneMovie`
        const showOneMovie = () => {
            localStorage.setItem('oneMovieObj', JSON.stringify(movieToDisplay))
            
        }
        return(
            
            <li key={index}>
                <Link to={path} onClick={showOneMovie}>

                    {movieToDisplay.name}

                </Link> , {date}</li>
    

        )
    })
    // console.log(item);


    const addSubscription = () => {
        // console.log("memberId" , id);
        localStorage.setItem("memberId", id)
        // console.log(id);
        // history.push("main/subscription/addSubscription")
    }

    return (
        <div>
            <h3>Movies Watched</h3>
            <br/>
            <br/>
            <Link to="/main/subscription/allmembers/submovie">
                <input type="button" value="Subscribe to new movie" onClick={addSubscription}></input>
            </Link>
            <ul>
                {item}
            </ul>
            
        </div>
    );
};

export default SubscriptionComponent;