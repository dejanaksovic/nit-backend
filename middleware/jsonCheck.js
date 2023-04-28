const checkSyntax = (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            err: "Invalid json syntax"
        })
    }

    next()
}

module.exports = checkSyntax