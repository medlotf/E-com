const { verifyTokenAndAuthorization } = require("./verifyToken")

const router = require("express").Router()
const CryptoJS = require("crypto-js")
const User = require("../Models/User")

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password)
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...otherParams } = user._doc
        res.status(200).json(otherParams)
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET ALL USERS
router.get("/", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router