import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import AllMembers from './AllMembers';
import AddMember from './AddMember';
import EditMember from './EditMember';
import ShowOneMember from './ShowOneMember';

const Subscription = () => {
    return (
        <div>
            <h2>Subscription</h2>
            <br/>
            <Link to="/main/subscription/allmembers">
                <input type='button' value="All Members"></input>
            </Link>
            <Link to="/main/subscription/addmember">
                <input type='button' value="Add Member"></input>
            </Link>

            <Switch>
                <Route path="/main/subscription/allmembers" component={AllMembers}></Route>
                <Route path="/main/subscription/addmember" component={AddMember}></Route>
                <Route path="/main/subscription/editmember" component={EditMember}></Route>
                <Route path="/main/subscription/showOneMember" component={ShowOneMember}></Route>
            </Switch>
        </div>
    );
};

export default Subscription;