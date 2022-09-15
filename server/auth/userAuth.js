const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SignUp = async (req, res, next) => {
	const { first_name, last_name, email, password } = req.body;
	try {
		const existingUser = await UserModel.findOne({ email });
		if (existingUser)
			return res
				.status(400)
				.json({ message: "User With This Email Already Exist!" });
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		if (!hashedPassword)
			return res.status(400).json({ message: "password hash failed!" });
		const user = await UserModel.create({
			first_name,
			last_name,
			email,
			password: hashedPassword,
		});

		if (!user) return res.status(400).json({ message: "User Signup Faild!" });
		const token = jwt.sign({ _id: user._id, email: user.email }, "SECRETE_KEY");

		return res.status(201).json({
			message: "signup successfully",
			user: {
				_id: user._id,
				first_name: user.first_name,
				last_name: user.last_name,
				email: user.email,
				TOKEN: token,
			},
		});
	} catch (error) {
		res.status(500).json({ message: `error ${error}` });
		next();
	}
};

const Login = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const user = await UserModel.findOne({ email });
		if (!user)
			return res
				.status(400)
				.json({ message: "User With This Email Does Not Exist!" });

		const isPasswordMatch = await bcrypt.compare(password, user.password);
		if (!isPasswordMatch)
			return res.status(400).json({ message: "Password Does Not Match!" });
		const token = jwt.sign({ _id: user._id, email: user.email }, "SECRETE_KEY");

		return res.status(201).json({
			message: "LoggedIn successfully",
			user: {
				_id: user._id,
				first_name: user.first_name,
				last_name: user.last_name,
				email: user.email,
				TOKEN: token,
			},
		});
	} catch (error) {
		res.status(500).json({ message: `error ${error}` });
		next();
	}
};
const getAllUser = async (req, res) => {
	try {
		const allUser = await UserModel.find();
		return res.json(allUser);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { SignUp, Login, getAllUser };
