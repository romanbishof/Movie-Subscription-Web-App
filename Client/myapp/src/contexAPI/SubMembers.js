import React, {createContext, useState} from 'react';


export const SubMembersContext = createContext()

export default function SubMembersProvider(props){

    const [subMembers, setSubMembers] = useState([])

    return(
        <SubMembersContext.Provider value={[subMembers, setSubMembers]}>
            {props.children}
        </SubMembersContext.Provider>
    )
}