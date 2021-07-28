const Member = require('../Schema/membersSchema')



// gel all members
let getAllMembers = () => {
    return new Promise((resolve, reject) => {
        Member.find({},(err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// get member by id
let getMemberById = (id) => {
    return new Promise((resolve, reject) => {
        Member.findById(id, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}



// add new member
let addMember = (member) => {
    return new Promise((resolve, reject) => {
        let newMember = new Member({
            name: member.name,
            email: member.email,
            city: member.city
        })

        newMember.save((err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// delete member 

let deleteMember = (id) => {
    return new Promise((resolve, reject) => {
        Member.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("member deleted")
            }
        })
    })
}

// update member
let updateMember = (id, memberObj) => {
    return new Promise((resolve, reject) => {
        Member.findByIdAndUpdate(id, {
            name: memberObj.name,
            email: memberObj.email,
            city: memberObj.city
        }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("member updated")
            }
        })
    })
}


module.exports = {addMember, getAllMembers, getMemberById, deleteMember, updateMember}