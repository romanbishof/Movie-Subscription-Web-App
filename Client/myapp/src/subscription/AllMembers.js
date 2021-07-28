import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Route } from 'react-router-dom';

import { MembersContext } from '../contexAPI/MembersContex';
import utils from '../login/utils';

import SubscriptionComponent from './SubscriptionComponent';
import AddSub from './AddSub';


const AllMembers = () => {

    const [members, setMembers] = useContext(MembersContext)
    let history = useHistory()
    // console.log(members);

    let member = members.map((member, index)=> {

        const editMember = () => {
            localStorage.setItem("memberEditObj", JSON.stringify(member))
            history.push("/main/subscription/editmember")
        }

        const deleteMember = async () => {

            let newMembersArray = members.filter(obj => obj._id !== member._id)

            setMembers(newMembersArray)

            await utils.deleteMember(member._id)
        }

        return (

            <div key={index}>
                <h2>{member.name}</h2>
                <br/>
                <b>Email:  </b><label>{member.email}</label><br/>
                <b>City:  </b><label>{member.city}</label><br/>
                <br/>
                <input type="button" value="Edit" onClick={editMember}></input>
                <input type="button" value="Delete" onClick={deleteMember}></input>
                <br/>
                <SubscriptionComponent id={member._id}></SubscriptionComponent>
                <br/>
                <Route path="/main/subscription/allmembers/submovie" component={AddSub}></Route>
                <br/>
                <br/>
                <br/>
            </div>
        )
    })
    
    return (
        <div>
            {member}

        </div>
    );
};

export default AllMembers;