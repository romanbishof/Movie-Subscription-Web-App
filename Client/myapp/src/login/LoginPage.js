import React, {useState, useEffect, useContext} from 'react';
import Utils from './utils'
import { useHistory} from 'react-router-dom';

import { UsersContext } from '../contexAPI/UsersContex';
import { MoviesContext } from '../contexAPI/MoviesContex';
import { MembersContext } from '../contexAPI/MembersContex';
import { SubscriptionContext } from '../contexAPI/SubscriptionContex';
import { SubMembersContext } from '../contexAPI/SubMembers';

const LoginPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useContext(UsersContext)
    const [movies, setMovies] = useContext(MoviesContext)
    const [members, setMembers] = useContext(MembersContext)
    const [subscription, setSubscription] = useContext(SubscriptionContext)
    const [ subMembers, setSubMembers] = useContext(SubMembersContext)

    let history = useHistory();

    useEffect( async () => {
        // getting the movies 
        let respMovies = await Utils.getMovies()
        setMovies(respMovies.data)
        // getting all users from DB and file
        let resp = await Utils.getUsers()
        setUsers(resp)
        let respMembers = await Utils.getMembers()
        setMembers(respMembers.data)

        let respSubscription = await Utils.getSubscriptions()
        setSubscription(respSubscription.data)
        
        movies.forEach(movie => {
            let movieId = movie._id

            if (!(movieId in subMembers)) {
                subMembers[movieId] = []
                setSubMembers(subMembers)
    
            } else {
    
                // let arr = subMembers[movieId]
                // arr.push(memberId)
                // subMembers[movieId] = arr
                // setSubMembers(subMembers)
            }
        });
        console.log(movies);
    },[])
    
    console.log(subMembers);
    const login =() => {
        let user = users.find(user => user.username === username)

        // checking the username and password
        if (username === user.username && password === user.password) {

            sessionStorage.setItem('userId', user._id)
            // go to next component
            history.push(`/main/${user._id}`)

        } else {
            alert("username or password is incorect")
        }
  
    }


    const createUser = () => {
        history.push(`/createUser`)
    }


    return (
        <div>
            <h1>Login Page</h1>
            User Name: <input type="text" onChange={e => setUsername(e.target.value)}></input><br/>
            Password: <input type="text" onChange={e => setPassword(e.target.value)}></input><br/>
            <input type = "button" value="Login" onClick={login}></input><br/>
            New User? : <input type="button" value="Create Account" onClick={createUser}></input>
            
        </div>
    );
};

export default LoginPage;