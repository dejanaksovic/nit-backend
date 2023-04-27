const jwt = require('jsonwebtoken')

const authorize = (req, res, next) => {
    if(!req.headers.authorization)
        return res.status(401).json({
            error: "Nema hedera za autorizaciju"
        })

    if(!req.headers.authorization.startsWith("Bearer")) {
        return res.status(401).json({
            error: "Autorizacija nije tipa 'bearer token'"
        })
    }

    const token = req.headers.authorization.split(" ")[1]

    if(!token) {
        return res.status(401).json({
            error: "Ne postoji token"
        })
    }

    try {
        payload = jwt.verify(token, "12345")
    }
    catch(err) {
        return res.status(401).json({
            error: "Token koji ste poslali ne vazi"
        })
    }

    next()
}

module.exports = authorize