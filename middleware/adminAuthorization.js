const { User }  = require('../models/User')

const adminAuthorization = (req, res, next) => {
    if(!User.getById(req.userId).isAdmin)
        return res.status(403).json({
            err: "Ovu mogucnost imaju samo administratori"
        })

    next()
}

module.exports = adminAuthorization