const nodemailer = require("nodemailer");
const dotenv = require("dotenv")

dotenv.config()

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
    },
});

module.exports.sendConfirmationEmail = (username, email, confirmationCode) => {
    transport.sendMail({
        from: user,
        to: email,
        subject: "Merci de confirmer votre compte",
        html: `<h1>Email de confirmation</h1>
          <h2> Salut ${username}</h2>
          <p>Merci de cliquer sur le lien ci-dessous pour confirmer votre compte</p>
          <a href=http://localhost:9000/confirm/${confirmationCode}> Click here</a>
          </div>`,
    }).catch(err => console.log(err));
};