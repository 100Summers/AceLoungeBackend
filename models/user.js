const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	Name: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: { type: String, enum: ["employee", "manager"], required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
