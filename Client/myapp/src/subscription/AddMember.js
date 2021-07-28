import React, { useContext, useState,  } from 'react';
import { useHistory } from 'react-router';

import { MembersContext } from '../contexAPI/MembersContex';
import utils from '../login/utils';
import { SubscriptionContext } from '../contexAPI/SubscriptionContex';
const AddMember = () => {

    const [members, setMembers] = useContext(MembersContext)
    const [subscriptions, setSubscriptions] = useContext(SubscriptionContext)

    let history = useHistory()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")

    const saveMember = async () => {

        let newMember = {
            name: name,
            email: email,
            city: city
        }
        let resp = await utils.addMember(newMember)
        // console.log(resp.data);
        setMembers(resp.data)
        
        let sub = await utils.getSubscriptions()
        setSubscriptions(sub.data)

        history.push('/main/subscription/allmembers')
    }

    const cancelAddMember = () => {
        history.push('/main/subscription/allmembers')
    }
    
    return (
        <div>
            <h2>Add new Member</h2>
            <b>Name: </b><input type="text" onChange={e => setName(e.target.value)}></input><br/>
            <b>Email: </b><input type="text" onChange={e => setEmail(e.target.value)}></input><br/>
            <b>City: </b><input type="text" onChange={e => setCity(e.target.value)}></input><br/>
            <br/>
            <input type="button" value="save" onClick={saveMember}></input>
            <input type="button" value="cancel" onClick={cancelAddMember}></input>

        </div>
    );
};

export default AddMember;