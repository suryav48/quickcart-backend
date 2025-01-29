const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/  // Ensures valid email format
    },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    address: { 
        street: String, 
        city: String, 
        state: String, 
        zip: String, 
        country: String 
    },
    createdAt: { type: Date, default: Date.now }
});

// Create an index for faster email lookups
userSchema.index({ email: 1 });

module.exports = mongoose.model("User", userSchema, "users");
