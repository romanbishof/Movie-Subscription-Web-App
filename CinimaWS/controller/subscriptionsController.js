const express = require('express')
const router = express.Router()
const subscriptionBL = require('../models/BL/subscriptionBL')

// get all members

router.route('/').get(async(req, resp) => {
    let members = await subscriptionBL.getAllSubMembers()
    return resp.json(members)
})
// get by id
router.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let member = await subscriptionBL.getSubMemberById(id)
    return resp.json(member)
})
// delete
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let result = await subscriptionBL.deleteSubMember(id)
    return resp.json(result)
})
// add
router.route('/').post(async(req, resp) => {
    let newSubMember = req.body
    let result = await subscriptionBL.addSubMember(newSubMember)
    return resp.json(result)

})
// update
router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let newSubMember = req.body
    let result = await subscriptionBL.updateSubMember(id, newSubMember)
    return resp.json(result)
})


module.exports = router