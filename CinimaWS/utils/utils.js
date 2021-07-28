const jfile = require('jsonfile')



let writeToUsersFile = (userObj, id) => {
    return new Promise(async(resolve, reject) => {

        // every time we get new aaray
        // let usersArray = []

        // we get all the current users
        let users = await jfile.readFile('./users.json')

        // add to new array
        // usersArray.push(users)
        let newUser = {
            id: id,
            fName: userObj.fName,
            lName: userObj.lName,
            cretedDate: userObj.cretedDate,
            sessionTimeOut: userObj.sessionTimeOut
        }

        // add new user to futer new array
        users.push(newUser)

        jfile.writeFile(`./users.json`, users,(err) => {
            if (err) {
                reject(err)
            } else {
                resolve("user added to json file")
            }
        })
    })
}

let writeToPermissionsFile = (userObj, id) => {
    return new Promise(async(resolve, reject) => {

        // every time we get new aaray
        // let usersPermissionArray = []

        // we get all the current users
        let usersPermisions = await jfile.readFile('./permissions.json')

        // add to new array
        // usersPermissionArray.push(usersPermisions)

        let newUser = {
            id: id,
            permissions: userObj.permissions
        }

        usersPermisions.push(newUser)

        jfile.writeFile(`./permissions.json`, usersPermisions,(err) => {
            if (err) {
                reject(err)
            } else {
                resolve("user added to json file")
            }
        })
    })
}

let readUserFile = () => {
    return new Promise((resolve, reject) => {
        jfile.readFile('./users.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

let readPermisionsFile = () => {
    return new Promise((resolve, reject) => {
        jfile.readFile('./permissions.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

let updatePermisionsFile = (userObj, id) => {
    return new Promise(async(resolve, reject) => {

        // we get all the current users
        let usersPermisions = await jfile.readFile('./permissions.json')

        // add to new array
        // usersPermissionArray.push(usersPermisions)

        let newUser = {
            id: id,
            permissions: userObj.permissions
        }
        let index = usersPermisions.findIndex(user => user._id === id)
        usersPermisions[index] = newUser

        jfile.writeFile(`./permissions.json`, usersPermisions,(err) => {
            if (err) {
                reject(err)
            } else {
                resolve("user added to json file")
            }
        })
    })
}

let updateUsersJsonFile = (userObj, id) => {
    return new Promise(async(resolve, reject) => {

        // every time we get new aaray
        // let usersArray = []

        // we get all the current users
        let users = await jfile.readFile('./users.json')

        // add to new array
        // usersArray.push(users)
        let newUser = {
            id: id,
            fName: userObj.fName,
            lName: userObj.lName,
            cretedDate: userObj.cretedDate,
            sessionTimeOut: userObj.sessionTimeOut
        }

        let index = users.findIndex(user => user._id === id)
        users[index] = newUser

        jfile.writeFile(`./users.json`, users,(err) => {
            if (err) {
                reject(err)
            } else {
                resolve("user added to json file")
            }
        })
    })
}

let deleteUserInJsonFile = (userIdToDelete) => {
    return new Promise(async(resolve, reject) => {

        // we get all the current users
        let users = await jfile.readFile('./users.json')

        // add to new array
        // usersArray.push(users)

        let index = users.findIndex(user => user._id === userIdToDelete)
        
        users.splice(index, 1)
        
        jfile.writeFile(`./users.json`, users,(err) => {
            if (err) {
                reject(err)
            } else {
                resolve("user added to json file")
            }
        })
    })
}

let deleteUserPermisionsInJsonFile = (userIdToDelete) => {
    return new Promise(async(resolve, reject) => {

        // every time we get new aaray
        // let usersArray = []

        // we get all the current users
        let usersPermisions = await jfile.readFile('./permissions.json')

        // add to new array
        // usersArray.push(users)

        let index = usersPermisions.findIndex(user => user._id === userIdToDelete)
        usersPermisions.splice(index, 1)

        jfile.writeFile(`./permissions.json`, usersPermisions,(err) => {
            if (err) {
                reject(err)
            } else {
                resolve("user added to json file")
            }
        })
    })
}

module.exports = {deleteUserPermisionsInJsonFile, deleteUserInJsonFile, updateUsersJsonFile, updatePermisionsFile, writeToUsersFile, writeToPermissionsFile, readUserFile, readPermisionsFile}