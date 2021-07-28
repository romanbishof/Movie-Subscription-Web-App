const express = require('express')
const memberRouter = express.Router()
const memberBL = require('../models/BL/membersBL')

// all members
memberRouter.route('/').get(async(req, resp) => {
    let members = await memberBL.getAllMembers()
    return resp.json(members)
})
// member by id
memberRouter.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let member = await memberBL.getMemberById(id)
    return resp.json(member)
})
// delete member
memberRouter.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let result = await memberBL.deleteMember(id)
    return resp.json(result)
})
// add member
memberRouter.route('/').post(async(req, resp) => {
    let newMember = req.body
    let result = await memberBL.addMember(newMember)
    return resp.json(result)
})

// update member
memberRouter.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let updatedMember = req.body
    let result = await memberBL.updateMember(id, updatedMember)
    return resp.json(result)
})

module.exports = memberRouter