const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
	first_name: {
		type: String,
	},
	last_name: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	role: {
		enum: ["user", "admin"],
	},
});

module.exports = model("Users", UserSchema);
