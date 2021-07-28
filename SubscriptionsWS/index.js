const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')

// importin our needed collection
const membersController = require('./controllers/membersController')
const moviesController = require('./controllers/moviesController')
const subscriptionController = require('./controllers/subscriptionController')

// importing the DATA Base
require('./configs/subscriptionsDB')


// load collections to the data base
require('./configs/membersColection')
require('./configs/moviesColection')



const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())

// use controllers
app.use('/members', membersController)
app.use('/movies', moviesController)
app.use('/subscription', subscriptionController)

/////////////////////////////////////////////////////////////////////////

app.listen(8000,() => {
    console.log("the server is up");
})

setTimeout(() => {
    require('./configs/subscriptionsColection')
}, 20000);






