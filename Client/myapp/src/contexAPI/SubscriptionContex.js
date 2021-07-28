import React, {createContext, useState} from 'react';


export const SubscriptionContext = createContext()

export default function SubscriptionProvider(props){

    const [subscription, setSubscription] = useState([])

    return(
        <SubscriptionContext.Provider value={[subscription, setSubscription]}>
            {props.children}
        </SubscriptionContext.Provider>
    )
}