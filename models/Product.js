const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    images: [{ type: String }],
    stock: { type: Number, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    categoryName: { type: String },
    categoryDescription: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", productSchema,"products");
