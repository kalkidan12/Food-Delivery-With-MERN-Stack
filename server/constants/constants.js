const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const ChapaUrls = {
	SECRETE_KEY: process.env.CHAPA_SECRETE_KEY,
	CHAPA_BASE_URL: "https://api.chapa.co/v1/transaction",
	VERIFY_URL: "https://api.chapa.co/v1/transaction/verify",
	TX_REF: uuidv4(),
};
module.exports = { ChapaUrls };
