const subscriptionBL = require('../models/subscription/BL/subscriptionBL')
const membersBL = require('../models/subscription/BL/membersBL')

// inserting members at the start of the server

let getSubscription = async () => {
    
    // getting 10 members

    let members = await membersBL.getAllMembers()
    
    // each current member getting send to the subscription with empty array

    members.forEach(async (member) => {

        let newSubscription = {
            memberId: member._id,
            movies: []
        }
        await subscriptionBL.addSubscription(newSubscription)
        
    });

    
}

getSubscription()