const express = require('express')
const router = express.Router()

const { getUsers, addUser, logIn } = require('../controllers/userController')

// @GET
// /users/?id
// get all users or if id is specified user with the given id
router.get('/:id?', getUsers)

// @POST
// /users
// add a new user
router.post('/', addUser)

// @POST
// /users/login
// log in a user

router.post('/login', logIn)

module.exports = router