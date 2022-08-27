const express = require("express");
const {
	SignUp,
	LogIn,
	getAllUser,
	filterUser,
	deleteUser,
	updateUser,
} = require("../controllers/UserController");
const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", LogIn);
router.get("/alluser", getAllUser);
router.get("/filteruser/:id", filterUser);
router.delete("/deleteuser/:id", deleteUser);
router.put("/updateuser/:id", updateUser);
module.exports = router;
