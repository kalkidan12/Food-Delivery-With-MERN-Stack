const express = require("express");
const cors = require("cors");
const conn = require("./database/db");
require("dotenv").config();
const app = express();

const userRoutes = require("./routes/User");
const paymentRoutes = require("./routes/Payments");

app.get("/", (req, res) => {
	res.send("Hello world");
});
const corsOptions = {
	origin: "http://localhost:3000",
	credentials: true,
	methods: "GET, PUT",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRoutes);
app.use("/api/payment", paymentRoutes);
// conn();

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
