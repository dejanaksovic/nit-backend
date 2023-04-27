const { User, users } = require('../models/User')

const jwt = require('jsonwebtoken')

const getUsers = (req, res) => {
    const { id } = req.params

    if(!id) {
        return res.status(200).json({
            users
        })
    }

    const user = User.getById(id)

    if(!user) {
        return res.status(404).json({
            err: "The user with that id doesn't exist"
        })
    }

    return res.status(200).json({
        user
    })
}

const addUser = (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password)
        return res.status(400).json({
            err: "The user must have all of the required fields"
        })

    try {
        const currentUser = new User(name, email, password)
        currentUser.save()
        return res.status(201).json({
            user: currentUser,
        })
    }

    catch(err) {
        return res.status(500).json({
            error: err.message
        })
    }
}

const logIn = (req, res) => {
    const {email, password} = req.body

    if(!email | !password) {
        return res.status(400).json({
            err: "Invalid credentials"
        })
    }

    const user = User.getByEmail(email)

    if(!user)
        return res.status(404).json({
            err: "The user with the given email doesn't exist"
        })

    if(user.password !== password) 
        return res.status(401).json({
            err: "Invalid credentials"
        })

    res.status(200).json({
        user,
        token: jwt.sign({ id: user.id }, "12345", {expiresIn: '1h'})
    })
}

module.exports = {
    getUsers,
    addUser,
    logIn
}