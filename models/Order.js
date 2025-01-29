const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            quantity: { type: Number, required: true }
        }
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Shipped", "Delivered"], default: "Pending" },
    shippingAddress: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema,"orders");
