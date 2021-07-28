const User = require('../Schema/userSchema')







// add user
let addUser = (userObj) => {
    return new Promise(async (resolve, reject) => {

        // the data that gouese to the DB
        let newUser = new User({
            username: userObj.username,
            password: userObj.password
        })
        newUser.save((err,data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })

    } )

    
}

// delete user
let deleteUser = (id) => {
    return new Promise((resolve, reject) => {

        User.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("user deleted")
            }
        })
    })
}

// get all users
let getUsers = () => {
    return new Promise((resolve, reject) => {
        User.find({},(err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// get by id
let getUserById = (id) => {
    return new Promise((resolve, reject) => {
        User.findById(id, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        } )
    })
}

// update users
let updateUser = (id, userObj) => {
    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id,{
            username: userObj.username,
            password: userObj.password
            
        }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}




module.exports = {addUser, deleteUser, getUsers, getUserById, updateUser}
