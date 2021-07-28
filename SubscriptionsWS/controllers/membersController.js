const express = require('express')
const router = express.Router()
const membersBL = require('../models/subscription/BL/membersBL')

// add new member
router.route('/').post(async(req, resp) => {
    let newMember = req.body
    let result = await membersBL.addMember(newMember)
    return resp.json(result)
})

// get all members
router.route('/').get(async(req, resp) => {
    let members = await membersBL.getAllMembers()
    return resp.json(members)
})

// get member by id
router.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let member = await membersBL.getMemberById(id)
    return resp.json(member)
})


// deleting member
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let result = await membersBL.deleteMember(id)
    return resp.json(result)
})

// update member
router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let newMember = req.body
    let result = await membersBL.updateMember(id, newMember)
    return resp.json(result)
})


module.exports = router