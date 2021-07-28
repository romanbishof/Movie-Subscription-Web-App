import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MoviesContext } from '../contexAPI/MoviesContex';
import { SubscriptionContext } from '../contexAPI/SubscriptionContex';
import { SubMembersContext } from '../contexAPI/SubMembers';

import utils from '../login/utils';

const AddSub = () => {
    const [movies, setMovies] = useContext(MoviesContext)
    const [subscription, setSubscription] = useContext(SubscriptionContext)
    const [subMembers, setSubMembers] = useContext(SubMembersContext)
    
    const [movieId, setMovieId] = useState("")
    const [date, setDate] = useState("")
    const [arrayOfMembersId, setArrayOfMembersId] = useState([])

    let memberId = localStorage.getItem("memberId")

    let history = useHistory()
    
    let movie = movies.map((movie, index) => {
        return(

             <option key={index} value={movie._id}>{movie.name}</option>

        )
    })

    
    
    const addSubscription = async () => {
        // console.log("before the change",subMembers);
        // console.log(subscription);
        let subscriber = subscription.find(sub=> sub.memberId === memberId)
        let index = subscription.findIndex(sub=> sub.memberId === memberId)
        
        // console.log(subscriber);
        // console.log("memberid", subscriber._id);
        
        
        let newSub = {
            _id: subscriber._id,
            memberId: memberId,
            movies: [...subscriber.movies,{
                movieId: movieId,
                date: date
            }]
        }
        
        // console.log("movieId", movieId);
        
        // subMembers[movieId] = [memberId]
        if (!(movieId in subMembers)) {
            subMembers[movieId] = [memberId]
            setSubMembers(subMembers)

        } else {

            let arr = subMembers[movieId]
            arr.push(memberId)
            subMembers[movieId] = arr
            setSubMembers(subMembers)
        }
        
        // console.log(subMembers);

        subscription[index] = newSub
        
        // console.log("id to send by", subscriber._id);

        await utils.updateSub(subscriber._id ,newSub)
        // console.log(subscription);
        setSubscription(subscription)
        
        history.push('/main/subscription/allmembers')
        
    }

    return (
        <div>
            <b><label>Add new Movies</label></b>
            <br/>
            <select onChange={e=> setMovieId(e.target.value)}>
                <option value=""></option>
                {movie}
            </select>
            <input type= "date" onChange={e=> setDate(e.target.value)}></input>
            <br/>
            <input type="button" value="subscribe" onClick={addSubscription}></input>

        </div>
    );
};

export default AddSub;