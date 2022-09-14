const { v4: uuidv4 } = require("uuid");
const ChapaUrls = {
	SECRETE_KEY: "CHASECK_TEST-NGJwUSsHXRs6x34QSW5rNQrfbjYuFDT2",
	CHAPA_BASE_URL: "https://api.chapa.co/v1/transaction",
	VERIFY_URL: "https://api.chapa.co/v1/transaction/verify",
	TX_REF: uuidv4(),
};
module.exports = { ChapaUrls };
