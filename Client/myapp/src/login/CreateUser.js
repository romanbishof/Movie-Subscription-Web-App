import React, {useContext, useState} from 'react';
import { useHistory} from 'react-router-dom';

import { UsersContext } from '../contexAPI/UsersContex';
import utils from './utils';

const CreateUser = () => {

    const [users, setUsers] = useContext(UsersContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    let history = useHistory();

    const createUser = async () => {
        let existingUser = users.find(user => user.username === username)
        if(existingUser){

            let updatedUser = {
                _id: existingUser._id,
                id: existingUser.id,
                username: existingUser.username,
                password: password,
                fName: existingUser.fName,
                lName: existingUser.lName,
                sessionTimeOut: existingUser.sessionTimeOut,
    
                permissions: {
                    viewSubscriptions: existingUser.permissions.viewSubscriptions,
                    createSubscriptions: existingUser.permissions.createSubscriptions,
                    deleteSubscriptions: existingUser.permissions.deleteSubscriptions,
                    updateSubscriptions: existingUser.permissions.updateSubscriptions,
                    viewMovies: existingUser.permissions.viewMovies,
                    createMovies: existingUser.permissions.createMovies,
                    deleteMovies: existingUser.permissions.deleteMovies,
                    updateMovies: existingUser.permissions.updatedMovies
                }
    
            }
            console.log(updatedUser);
            let index = users.findIndex(Element => Element._id === existingUser._id)
            users[index] = updatedUser

            setUsers(users)
            // console.log(users);

            await utils.updateUser(updatedUser._id, updatedUser)

            history.push(`/`) 
            

        } else {
            alert("please contact the admin, username does not exist!!!")
            history.push(`/`)   

        }

    }
    return (
        <div>
            <h2>Create an account</h2>
            <br/>
            
            User Name: <input type="text" onChange={e => setUsername(e.target.value)}></input><br/>
            Password: <input type="text" onChange={e => setPassword(e.target.value)}></input><br/>
            <input type='button' value='Create' onClick={createUser}></input>
        </div>
    );
};

export default CreateUser;