const express = require('express')
const router = express.Router()

// CONTROLLERS
const { getUsers, addUser, logIn, deleteUser } = require('../controllers/userController')

//MIDDLEWARE
const authorize = require('../middleware/authorization')
const adminAuthorization = require('../middleware/adminAuthorization')

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
// log in a user, giving it an access token
router.post('/login', logIn)

// @DELETE
// /users/:id
// delete a user with the given id
router.delete('/:id', authorize, adminAuthorization, deleteUser)

module.exports = router