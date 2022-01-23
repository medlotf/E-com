const express = require("express");
const app = express();
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")


dotenv.config()

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error(err))


app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)


app.listen(process.env.PORT || 9000, () => {
    console.log("Backend server is running!");
});