import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { UsersContext } from '../contexAPI/UsersContex';
import Utils from '../login/utils';

const EditUser = (props) => {

    let history = useHistory()

    const [users, setUsers] = useContext(UsersContext)
    
    let user = JSON.parse(localStorage.getItem('userEditObj'))


    

    const [fname, setFname] = useState(user.fName)
    const [lname, setLname] = useState(user.lName)
    const [password, setPassword] = useState(user.password)
    const [username, setUsername] = useState(user.username)
    const [sesionTime, setSesionTime] = useState(user.sessionTimeOut)
    const [viewSubscriptions, setViewSubscriptions] = useState(false)
    const [createSubscriptions, setCreateSubscriptions] = useState(false)
    const [deleteSubscriptions, setDeleteSubscriptions] = useState(false)
    const [updateSubscriptions, setUpdateSubscriptions] = useState(false)
    const [viewMovies, setViewMovies] = useState(false)
    const [createMovies, setCreateMovies] = useState(false)
    const [deleteMovie, setDeleteMovie] = useState(false)
    const [updatedMovie, setUpdatedMovie] = useState(false)


    const saveUser =  async () => {
        
        // console.log(user);
        
        let editedUser = {
            _id: user._id,
            id: user.id,
            username: username,
            password: password,
            fName: fname,
            lName: lname,
            sessionTimeOut: sesionTime,

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
        
        let index = users.findIndex(Element => Element._id === user._id)
        
        users[index] = editedUser
        // console.log(" new users",users);
        setUsers(users)

        await Utils.updateUser(editedUser._id, editedUser)

        history.push('/main/users/allusers')
    }

    const cancelAddNewUser = () => {
        history.push('/main/users/allusers')
    }
    
    return (
        <div>
            <h2>Edit User: </h2>
            <br/>

            First Name: <input type="text" defaultValue={user.fName} onChange={e => setFname(e.target.value)}></input><br/>
            Last Name: <input type="text" defaultValue={user.lName} onChange={e => setLname(e.target.value)}></input><br/>
            Username: <input type="text" defaultValue={user.username} onChange={e => setUsername(e.target.value)}></input><br/>
            Sesion time out: <input type="text" defaultValue={user.sessionTimeOut} onChange={e => setSesionTime(e.target.value)}></input><br/>
            Permissions:
            <br/>
            <input type="checkbox" defaultChecked={user.permissions.viewSubscriptions} onChange={e => setViewSubscriptions(e.target.checked)}></input>
            <label>View Subscription</label> <br/>

            <input type="checkbox" defaultChecked={user.permissions.createSubscriptions} onChange={e => setCreateSubscriptions(e.target.checked)}></input>
            <label>Create Subscription</label> <br/>

            <input type="checkbox" defaultChecked={user.permissions.deleteSubscriptions} onChange={e => setDeleteSubscriptions(e.target.checked)}></input>
            <label>Delete Subscription</label> <br/>

            <input type="checkbox"defaultChecked={user.permissions.updateSubscriptions} onChange={e => setUpdateSubscriptions(e.target.checked)}></input>
            <label>Update Subscription</label> <br/>

            <input type="checkbox" defaultChecked={user.permissions.viewMovies} onChange={e => setViewMovies(e.target.checked)}></input>
            <label>View Movies</label> <br/>

            <input type="checkbox" defaultChecked={user.permissions.createMovies} onChange={e => setCreateMovies(e.target.checked)}></input>
            <label>Create Movies</label> <br/>

            <input type="checkbox" defaultChecked={user.permissions.deleteMovies} onChange={e => setDeleteMovie(e.target.checked)}></input>
            <label>Delete Movies</label> <br/>

            <input type="checkbox" defaultChecked={user.permissions.updateMovies} onChange={e => setUpdatedMovie(e.target.checked)}></input>
            <label>Update Movies</label> <br/>

            <input type="button" value="Save" onClick={saveUser}></input>
            <input type="button" value="Cancel" onClick={cancelAddNewUser}></input><br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default EditUser;