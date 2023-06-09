let { User, users } = require('../models/User')

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
            err: "Korisnik sa tim id-em ne postoji"
        })
    }

    return res.status(200).json({
        user
    })
}

const addUser = (req, res) => {
    const { name, email, password, residency, desc, imgUrl, ghUrl } = req.body

    if(!name || !email || !password)
        return res.status(400).json({
            err: "Korisnik mora imati sva zadata polja"
        })

    try {
        const currentUser = new User(name, email, password, residency, desc, imgUrl, ghUrl)
        currentUser.save()
        return res.status(201).json({
            user: currentUser,
        })
    }

    catch(err) {
        return res.status(500).json({
            err: err.message
        })
    }
}

const logIn = (req, res) => {
    const {email, password} = req.body

    if(!email | !password) {
        return res.status(400).json({
            err: "Neispravni kredencijali"
        })
    }

    const user = User.getByEmail(email)

    if(!user)
        return res.status(404).json({
            err: "Korisnik sa tom imejl adresom ne postoji"
        })

    if(user.password !== password) 
        return res.status(401).json({
            err: "Neispravni kredencijali"
        })

    res.status(200).json({
        user,
        token: jwt.sign({ id: user.id }, "12345", {expiresIn: '1h'})
    })
}

const deleteUser = (req, res) => {
    const { id } = req.params

    if(!id) 
        return res.status(400).json({
            err: "Morate dati id korisnika kojeg zelite da obrisete"
        })
    
    const userToDel = User.getById(id)

    if(!userToDel)
        return res.status(404).json({
            err: "Korisnik sa tim id-em nije pronadjen"
        })

    users = users.filter( e => e.id !== id )

    return res.status(200).json({
        userToDel
    })
}

module.exports = {
    getUsers,
    addUser,
    logIn,
    deleteUser
}