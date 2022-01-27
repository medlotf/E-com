const router = require("express").Router();
const User = require("./../Models/User");
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

const dotenv = require("dotenv")
dotenv.config()

//REGISTER:
router.post("/register", async (req, res) => {

  //const token = jwt.sign({ email: req.body.email }, process.env.JWT_SEC)

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    isPro: req.body.isPro
  });

  try {
    const savedUser = await newUser.save()
    // const savedUser = await newUser.save((err) => {
    //   if (err) {
    //     res.status(500).send({ message: err });
    //     return;
    //   }
    //   res.send({
    //     message:
    //       "Merci de vérifier votre mail pour confirmer la création de votre compte!",
    //   });

    //   nodemailer.sendConfirmationEmail(
    //     newUser.username,
    //     newUser.email,
    //     newUser.confirmationCode
    //   );
    // });;
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

    // if (user.status !== "Active" ) {
    //   return res.status(401).send({
    //     message: "Merci de vérifier l'email",
    //   });
    // }

    const accessToken = jwt.sign({
      id: user._id,
      isPro: user.isPro
    }, process.env.JWT_SEC)

    const { password, ...otherParams } = user._doc
    res.status(200).json({ ...otherParams, accessToken })
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get("/confirm/:confirmationCode", async (req, res, next) => {
  User.findOne({
    confirmationCode: req.params.confirmationCode,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }

      user.status = "Active";
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    })
    .catch((e) => console.log("error", e));
})

module.exports = router