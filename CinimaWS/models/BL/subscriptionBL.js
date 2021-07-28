
const axios = require('axios')


// get all members
let getAllSubMembers = () => {
    return new Promise(async (resolve, reject) => {
        let getMembers = await axios.get('http://localhost:8000/subscription')
        resolve(getMembers.data)
    })
}
// get sub member by id
let getSubMemberById = (id) => {
    return new Promise(async (resolve, reject) => {
        let getMember = await axios.get(`http://localhost:8000/subscription/${id}`)
        resolve(getMember.data)
    })
}
// delete sub member
let deleteSubMember = (id) => {
    return new Promise(async (resolve, reject) => {
        let result = await axios.delete(`http://localhost:8000/subscription/${id}`)
        resolve(result.data)
    })
}
// add sub member
let addSubMember = (subMemberObj) => {
    return new Promise(async (resolve, reject) => {
        let subMember = await axios.post(`http://localhost:8000/subscription`, subMemberObj)
        resolve(subMember.data)
    })
}
// update sub member
let updateSubMember = (id, subMemberObj) => {
    return new Promise(async(resolve, reject) => {
        let result = await axios.put(`http://localhost:8000/subscription/${id}`, subMemberObj)
        resolve(result.data)
    })

}
module.exports = {updateSubMember, addSubMember, deleteSubMember, getAllSubMembers, getSubMemberById}