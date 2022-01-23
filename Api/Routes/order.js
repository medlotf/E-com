const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken")

const router = require("express").Router()
const Order = require("../Models/Order")

//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET USER ORDERS
router.get("/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const order = await Order.find({ userId: req.params.userId });
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router