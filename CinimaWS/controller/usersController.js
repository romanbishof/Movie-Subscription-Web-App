const express = require('express')
const router = express.Router()

const usersBL = require('../models/BL/usersBL')
const Utils = require('../utils/utils')

// add new user
router.route('/').post(async(req, resp) => {
    let newUser = req.body
    let result = await usersBL.addUser(newUser)

    // adding to json File

    await Utils.writeToUsersFile(newUser, result._id)
    await Utils.writeToPermissionsFile(newUser, result._id)


    return resp.json(result)
})

// delete user
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let result = await usersBL.deleteUser(id)
    await Utils.deleteUserInJsonFile(id)
    await Utils.deleteUserPermisionsInJsonFile(id)
    return resp.json(result)
})

// get all
router.route('/').get(async (req, resp) => {
    let usersDB = await usersBL.getUsers()

    let usersJsonFile = await Utils.readUserFile()
    let userPermisionsFile = await Utils.readPermisionsFile()

    let usersObj = {
        users: usersDB,
        userJson: usersJsonFile,
        usersPermisions: userPermisionsFile
    }
    
    return resp.json(usersObj)
})

// update user
router.route('/:id').put(async (req, resp) => {
    let id = req.params.id
    let newUser = req.body
    let result = await usersBL.updateUser(id, newUser)

    // write to json file the new info
    await Utils.updatePermisionsFile(newUser, id)
    await Utils.updateUsersJsonFile(newUser, id)



    return resp.json(result)
})

// getby id 
router.route('/:id').get(async (req, resp) => {
    let id = req.params.id
    let user = await usersBL.getUserById(id)
    return resp.json(user)
})


module.exports = router