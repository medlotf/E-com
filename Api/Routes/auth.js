const router = require("express").Router();
const User = require("./../Models/User");
const CryptoJS = require("crypto-js")

const dotenv = require("dotenv")
dotenv.config()

//REGISTER:
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        isPro: req.body.isPro
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

//LOGIN:

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json("Wrong Username")

        const hashedPass = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const pass = hashedPass.toString(CryptoJS.enc.Utf8);

        pass !== req.body.password && res.status(401).json("Wrong Password")

        const { password, ...otherParams } = user._doc
        res.status(200).json(otherParams)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router