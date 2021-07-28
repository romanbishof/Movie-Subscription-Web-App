import React, { useContext, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { UsersContext } from '../contexAPI/UsersContex';
import Utils from '../login/utils';
import AddUser from './AddUser';
import AllUsers from './AllUsers';
import EditUser from './EditUser';

const Users = () => {

    const [users, setUsers] = useContext(UsersContext)

    return (
        <div>
            <h2>Users</h2>
            <br/>
            
            <Link to="/main/users/allusers">
                <input type='button' value="All Users"></input>
            </Link>

            <Link to="/main/users/adduser">
                <input type='button' value="Add User"></input>
            </Link>

            <Switch>
                <Route path="/main/users/adduser" component={AddUser}></Route>
                <Route path="/main/users/allusers" component={AllUsers}></Route>
                <Route path="/main/users/edituser" component={EditUser}></Route>
            </Switch>
        </div>
    );
};

export default Users;