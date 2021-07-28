const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')


// import collection
const usersController = require('./controller/usersController')
const subscriptionsController = require('./controller/subscriptionsController')
const membersController = require('./controller/membersController')
const moviesController = require('./controller/moviesController')
 
// importing the DATA Base
require('./configs/usersDB')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())


// user controller
app.use('/users', usersController)
app.use('/subscription', subscriptionsController)
app.use('/members', membersController)
app.use('/movies', moviesController)

app.listen(8080,() => {
    console.log("the server is up");
})