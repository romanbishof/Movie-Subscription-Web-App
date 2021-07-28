import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import utils from '../login/utils';

import { UsersContext } from '../contexAPI/UsersContex';

const AddUser = () => {


    const [users, setUsers] = useContext(UsersContext)
    let history = useHistory()

    
    
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [username, setUsername] = useState('')
    const [sesionTime, setSesionTime] = useState('')
    const [viewSubscriptions, setViewSubscriptions] = useState(false)
    const [createSubscriptions, setCreateSubscriptions] = useState(false)
    const [deleteSubscriptions, setDeleteSubscriptions] = useState(false)
    const [updateSubscriptions, setUpdateSubscriptions] = useState(false)
    const [viewMovies, setViewMovies] = useState(false)
    const [createMovies, setCreateMovies] = useState(false)
    const [deleteMovie, setDeleteMovie] = useState(false)
    const [updatedMovie, setUpdatedMovie] = useState(false)

    const cancelAddNewUser = () => {
        history.push('/main/users/allusers')
    }

    const saveUser = async () => {
        let newUser = {
            username: username,
            password: "",
            fName: fname,
            lName: lname,
            sessionTimeOut: sesionTime,
            dateTime: new Date(),
            permissions: {
                viewSubscriptions: viewSubscriptions,
                createSubscriptions: createSubscriptions,
                deleteSubscriptions: deleteSubscriptions,
                updateSubscriptions: updateSubscriptions,
                viewMovies: viewMovies,
                createMovies: createMovies,
                deleteMovies: deleteMovie,
                updateMovies: updatedMovie
            }

        }

        let resp = await utils.addUser(newUser)
        console.log(resp);

        setUsers(resp)
        history.push('/main/users/allusers')

    }

    return (
        <div>
            <h2>Add New User</h2>
            First Name: <input type="text" onChange={e => setFname(e.target.value)}></input><br/>
            Last Name: <input type="text" onChange={e => setLname(e.target.value)}></input><br/>
            Username: <input type="text" onChange={e => setUsername(e.target.value)}></input><br/>
            Sesion time out: <input type="text" onChange={e => setSesionTime(e.target.value)}></input><br/>
            Permissions:
            <br/>
            <input type="checkbox" onChange={e => setViewSubscriptions(e.target.checked)}></input>
            <label>View Subscription</label> <br/>

            <input type="checkbox" onChange={e => setCreateSubscriptions(e.target.checked)}></input>
            <label>Create Subscription</label> <br/>

            <input type="checkbox" onChange={e => setDeleteSubscriptions(e.target.checked)}></input>
            <label>Delete Subscription</label> <br/>

            <input type="checkbox" onChange={e => setUpdateSubscriptions(e.target.checked)}></input>
            <label>Update Subscription</label> <br/>

            <input type="checkbox" onChange={e => setViewMovies(e.target.checked)}></input>
            <label>View Movies</label> <br/>

            <input type="checkbox" onChange={e => setCreateMovies(e.target.checked)}></input>
            <label>Create Movies</label> <br/>

            <input type="checkbox" onChange={e => setDeleteMovie(e.target.checked)}></input>
            <label>Delete Movies</label> <br/>

            <input type="checkbox" onChange={e => setUpdatedMovie(e.target.checked)}></input>
            <label>Update Movies</label> <br/>

            <input type="button" value="Save" onClick={saveUser}></input>
            <input type="button" value="Cancel" onClick={cancelAddNewUser}></input><br/>
            
            
            
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default AddUser;