import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import utils from '../login/utils';

import { MembersContext } from '../contexAPI/MembersContex';
const EditMember = () => {

    let history = useHistory()

    const [members, setMembers] = useContext(MembersContext)

    let member = JSON.parse(localStorage.getItem('memberEditObj'))

    const [name, setName] = useState(member.name)
    const [email, setEmail] = useState(member.email)
    const [city, setCity] = useState(member.city)
    
    const updateMember = async () => {

        let editMember = {
            _id: member._id,
            name: name,
            email: email,
            city: city
        }

        let index = members.findIndex(elm => elm._id === member._id)

        members[index] = editMember
        setMembers(members)

        await utils.updateMember(editMember._id, editMember)

        history.push('/main/subscription/allmembers')
        
        
    }

    const cancelEdit = () => {
        history.push('/main/subscription/allmembers')
    }
    
    return (
        <div>
            <h2>Edit Member:  {member.name}</h2>
            <b>Name: </b><input type="text" defaultValue={member.name} onChange={e => setName(e.target.value)}></input><br/>
            <b>Email: </b><input type="text" defaultValue={member.email} onChange={e => setEmail(e.target.value)}></input><br/>
            <b>City: </b><input type="text" defaultValue={member.city} onChange={e => setCity(e.target.value)}></input><br/>
            <br/>
            <input type="button" value="update" onClick={updateMember}></input>
            <input type="button" value="cancel" onClick={cancelEdit}></input>
        </div>
    );
};

export default EditMember;