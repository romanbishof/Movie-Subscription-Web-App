const axios = require('axios')
// get all members
let getAllMembers = () => {
    return new Promise(async (resolve, reject) => {
        let allMembers = await axios.get(`http://localhost:8000/members`)
        resolve(allMembers.data)
    })
}
// get by id
let getMemberById = (id) => {
    return new Promise(async (resolve, reject) => {
        let member = await axios.get(`http://localhost:8000/members/${id}`)
        resolve(member.data)
    })
}
// delete member 
let deleteMember = (id) => {
    return new Promise(async(resolve, reject) => {
        let result = await axios.delete(`http://localhost:8000/members/${id}`)
        resolve(result.data)
    })
}
// add member
let addMember = (memberObj) => {
    return new Promise(async(resolve, reject) => {
        let result = await axios.post(`http://localhost:8000/members`, memberObj)
        resolve(result.data)
    })
}
// update member
let updateMember = (id, memberObj) => {
    return new Promise(async(resolve, reject) => {
        let result = await axios.put(`http://localhost:8000/members/${id}`, memberObj)
        resolve(result.data)
    })
}
 
module.exports = {updateMember, addMember, getMemberById, getAllMembers, deleteMember}