import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MembersContext } from '../contexAPI/MembersContex';
import utils from '../login/utils';



const ShowOneMember = () => {

    const [members, setMembers] = useContext(MembersContext)

    let member = JSON.parse(localStorage.getItem("oneMemberObj"))

    // const deleteMember =async () => {

    //     let newMembersArray = members.filter(obj => obj._id !== member._id)

    //         setMembers(newMembersArray)

    //         await utils.deleteMember(member._id)
        
    // }

    return (
        <div>
            <h3>{member.name}</h3>
            <b><label>Email: </label></b>{member.email}<br/>
            <b><label>City: </label></b>{member.city}<br/>
            <Link to="/main/subscription/editmember">
                <input type="button" value="Edit" onClick={localStorage.setItem("memberEditObj", JSON.stringify(member))}></input>
            </Link>
{/* 
            <Link to="/main/subscription/editmember">
                <input type="button" value="Delete" onClick={deleteMember}></input>
            </Link> */}

        </div>
    );
};

export default ShowOneMember;