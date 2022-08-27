const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
	FirstName: {
		type: String,
	},
	LastName: {
		type: String,
	},
	Email: {
		type: String,
	},
	Password: {
		type: String,
	},
	Role: {
		enum: ["user", "admin"],
	},
});

module.exports = model("user", UserSchema);
