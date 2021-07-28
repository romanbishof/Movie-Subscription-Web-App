import React, {createContext, useState} from 'react';


export const MembersContext = createContext()

export default function MembersProvider(props){

    const [members, setMembers] = useState([])

    return(
        <MembersContext.Provider value={[members, setMembers]}>
            {props.children}
        </MembersContext.Provider>
    )
}