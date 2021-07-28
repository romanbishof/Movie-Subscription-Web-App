const Subscription = require('../Schema/subscriptionSchema')
// add sub member
let addSubscription = (subscription) => {
    return new Promise((resolve, reject) => {
        let newSubsciption = new Subscription({
            memberId: subscription.memberId,
            movies: subscription.movies
        })
        
        
        newSubsciption.save((err) => {
            if (err) {
                reject(err)
            } else {
                resolve("subscription added")
            }
        })
    })
}

// get all sub members
let getSubscriptionMember = () => {
    return new Promise((resolve, reject) => {
        Subscription.find({}, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
// get sub member by id
let getSubscriptionMemberById = (id) => {
    return new Promise((resolve, reject) => {
        Subscription.findById(id , (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// delete sub member
let deleteSubscriptionMember = (id) => {
    return new Promise((resolve, reject) => {
        Subscription.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("sub member was deleted")
                
            }
        })
    })
}
// update sub member
let updateSubscriptionMember = (id, subMemberObj) => {
    return new Promise((resolve, rejecct) => {
        Subscription.findByIdAndUpdate(id, {
            memberId: subMemberObj.memberId,
            movies: subMemberObj.movies
        }, (err) => {
            if (err) {
                rejecct(err)
            } else {
                resolve("sub member update")
            }
        })
    })
}

module.exports = {deleteSubscriptionMember, updateSubscriptionMember, addSubscription, getSubscriptionMember, getSubscriptionMemberById}