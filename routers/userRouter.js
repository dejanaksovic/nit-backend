const express = require('express')
const router = express.Router()

// CONTROLLERS
const { getUsers, addUser, logIn } = require('../controllers/userController')

//MIDDLEWARE
const authorize = require('../middleware/authorization')

// @GET
// /users/?id
// get all users or if id is specified user with the given id
router.get('/:id?',authorize, getUsers)

// @POST
// /users
// add a new user
router.post('/', addUser)

// @POST
// /users/login
// log in a user

router.post('/login', logIn)

module.exports = router