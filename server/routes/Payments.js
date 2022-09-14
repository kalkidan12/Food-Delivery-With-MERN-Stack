const router = require("express").Router();
const {
	VerifyPayment,
	InitializePayent,
} = require("../controllers/PaymentController");

router.post("/initialize-payment", InitializePayent);
router.get("verify-payment/:tx_ref", VerifyPayment);
module.exports = router;
