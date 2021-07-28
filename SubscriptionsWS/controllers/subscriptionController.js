const express = require('express')
const router = express.Router()
const subscriptionBL = require('../models/subscription/BL/subscriptionBL')

// add new subscription
router.route('/').post(async(req, resp) => {
    let newSubscription = req.body
    let result = await subscriptionBL.addSubscription(newSubscription)
    return resp.json(result)
})
// get all sub members
router.route('/').get(async(req, resp) => {
    let subscriptionMembers = await subscriptionBL.getSubscriptionMember()
    return resp.json(subscriptionMembers)
})
// get sub member by id
router.route('/:id').get(async(req, resp) => {
    let id = req.params.id
    let subscriptionMember = await subscriptionBL.getSubscriptionMemberById(id)
    return resp.json(subscriptionMember)
})
// delete sub member
router.route('/:id').delete(async(req, resp) => {
    let id = req.params.id
    let result = await subscriptionBL.deleteSubscriptionMember(id)
    return resp.json(result)
})
// update sub member
router.route('/:id').put(async(req, resp) => {
    let id = req.params.id
    let newSubMember = req.body
    let result = await subscriptionBL.updateSubscriptionMember(id, newSubMember)
    return resp.json(result)
})

module.exports = router