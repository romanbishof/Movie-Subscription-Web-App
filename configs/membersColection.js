const axios = require('axios')
const membersBL = require('../models/subscription/BL/membersBL')

// inserting members at the start of the server

let getMembers = async () => {
    
    // getting 10 members
    let resp = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    let members = resp.data
    
    // each member gets send to the DB

    members.forEach(async (member) => {

        let newMember = {
            name: member.name,
            email: member.email,
            city: member.address.city
        }
        await membersBL.addMember(newMember)
        
    });
}

// wirte the function content on the global block -> using then
//give a name to the function and call it
//IIF
getMembers()



