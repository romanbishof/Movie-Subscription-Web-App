import React, { useContext} from 'react';
import { useHistory } from 'react-router-dom';

import { UsersContext } from '../contexAPI/UsersContex';
import Utils from '../login/utils';

const AllUsers = () => {

    const [users, setUsers] = useContext(UsersContext)

    // console.log("all users loadded" , users);
    let history = useHistory()
    
    // making the user comp
    let user = users.map((user, index) => {

        let permissions = Object.keys(user.permissions).filter(k => user.permissions[k] === true)
        
        const editUser = () => {
            
            localStorage.setItem("userEditObj", JSON.stringify(user))
            
            history.push(`/main/users/edituser`)
            
            
        }

        const deletUser = async () => {

            // let index = users.findIndex(obj => obj._id === user._id)
            let newUsersArray = users.filter(obj => obj._id !== user._id)
            // console.log(newUsersArray);

            setUsers(newUsersArray)
            console.log("delet user by id", user._id);
            let resp = await Utils.deleteUser(String(user._id))
            console.log(resp.data);
            
            history.push('/main/users/allusers')
        }

        return (
            
                
            <div key={index}>
                Name: <label>{user.fName}</label><br/>
                Username: <label>{user.username}</label><br/>
                Sesion time: <label>{user.sessionTimeOut}</label><br/>
                Created Date: <label>{user.createdDate}</label><br/>
                Permisions: <label>{permissions.join()}</label>
                <br/>
                <input type="button" value='Edit' onClick={editUser}></input>
                <input type="button" value='Delete'onClick={deletUser}></input>
                <br/>
                <br/>
            </div>
            
        )
    })

    
    
    
    return (
        <div>
            {user} 
        </div>
    );
};

export default AllUsers;