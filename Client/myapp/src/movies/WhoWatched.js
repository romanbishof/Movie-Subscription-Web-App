import React, { useContext } from 'react';

import { SubscriptionContext } from '../contexAPI/SubscriptionContex';
import { MembersContext } from '../contexAPI/MembersContex';

import { SubMembersContext } from '../contexAPI/SubMembers';

import { Link } from 'react-router-dom';
const WhoWatched = (props) => {

    const [subscription, setSubscription] = useContext(SubscriptionContext)
    const [subMembers, setSubMembers] = useContext(SubMembersContext)
    // console.log(props.movieId);
    let movieId = props.movieId
    // console.log(subscription);
    const [members, setMembers] = useContext(MembersContext)
    
    console.log("submember", subMembers);
    let sub = subMembers[movieId].map((memberId, index) => {

        let member = members.find(member => member._id === memberId)
        

        const showOnemember = () =>{
            localStorage.setItem('oneMemberObj', JSON.stringify(member))
        }
        
        return (
            <li key={index} onClick={showOnemember}>
                <Link to='/main/subscription/showOneMember'>
                    {member.name}
                </Link>
            </li>
        )
    })
    

    return (
        <div>
            <h3>Subscriptions Watched</h3>
            <ul>
                {sub}
            </ul>
        </div>
    );
};

export default WhoWatched;