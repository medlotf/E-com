const express = require("express");
const app = express();
const dotenv = require("dotenv")

dotenv.config()

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error(err))

app.listen(process.env.PORT || 9000, () => {
    console.log("Backend server is running!");
});