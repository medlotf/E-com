const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json("Token is not valid!")
            req.user = user
            next()
        })
    }
    else {
        return res.status(401).json('You are not authenticated')
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id) next()
        else res.status(403).json("You don't have the authorization")
    })
}

const verifyTokenAndPro = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isPro) next()
        else res.status(403).json("You don't have the authorization")
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndPro }