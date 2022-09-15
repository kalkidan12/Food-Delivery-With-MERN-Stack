const User = require("../models/User");
const UserSchema = require("../models/User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");
require("dotenv").config();

const getAllUser = async (req, res) => {
	try {
		const allUser = await UserSchema.find({});
		if (!allUser)
			return res.json({ message: "fetchinguser failed!", data: [] });
		res.json({ message: "user fetch successfully", data: allUser });
	} catch (error) {
		res.json({ message: `error occured ${error}` });
	}
};

const filterUser = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await UserSchema.findById(id);
		if (!user) return res.json({ message: "user does not exist", data: "" });
		res.json({ message: "user filter success", data: user });
	} catch (error) {
		res.json({ message: `${error}` });
	}
};

const deleteUser = async (req, res) => {
	const id = req.params.id;
	try {
		const deleted = await UserSchema.findByIdAndDelete(id);
		if (!deleted) return res.json({ message: "error while deleting" });
		res.json({ message: "deleted successfully" });
	} catch (error) {
		res.json({ message: `error ${error}` });
	}
};

const updateUser = async (req, res) => {
	const id = req.params.id;
	try {
		const userExist = await UserSchema.findById(id);
		if (!userExist) return res.json({ message: "there is no such user!" });

		const updatedUser = { ...req.body };
		// if (
		// 	(updatedUser.FirstName = userExist.FirstName) &&
		// 	(updatedUser.LastName = userExist.LastName) &&
		// 	(updatedUser.Email = userExist.Email) &&
		// 	(updatedUser.Role = userExist.Role)
		// )
		// 	return res.json({
		// 		message: "comparison exactly the same modify something",
		// 	});
		const updateUser = await UserSchema.findOneAndUpdate(id, updatedUser);

		if (!updateUser) return res.json({ message: "unable to update use!" });
		res.json({ message: "user updated successfully", data: updatedUser });
	} catch (error) {
		res.json({ message: `can not update user ${error}` });
	}
};

const SignUp = async (req, res) => {
	const { FirstName, LastName, Email, Password, Role } = req.body;
	const emailRegEx =
		/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
	try {
		const userExist = await UserSchema.findOne({ Email });
		if (userExist)
			return res.json({ message: "User With This Email Already Exist!" });
		const newUser = new UserSchema({
			FirstName,
			LastName,
			Email,
			Password: sha256(Password + process.env.SALT),
			Role,
		});
		await newUser.save();
		res.json({ message: "Registration Succes" });
	} catch (error) {
		res.status(405).json({ message: `Error occured ${error}` });
	}
};

const LogIn = async (req, res) => {
	const { Email, Password } = req.body;
	const emailRegEx =
		/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
	try {
		// if (!emailRegEx.test(Email)) return "Invalid Email Type!";
		// if (Password.length < 6) return "Password length should be at least 6!";
		const user = await UserSchema.findOne({
			Email,
			Password, //: sha256(Password + process.env.SALT),
		});
		if (!user) return res.status(403).json({ message: "User does not exist!" });
		const token = jwt.sign({ id: user._id }, process.env.SECRETE_KEY);
		res.status(201).json({
			message: "login successfull",
			token: token,
		});
	} catch (error) {
		res.json({ message: `error ${error}` });
	}
};

module.exports = {
	SignUp,
	LogIn,
	filterUser,
	deleteUser,
	updateUser,
	getAllUser,
};
