const express = require("express");
const http = require("http");
const cors = require("cors");
const conn = require("./database/db");
require("dotenv").config();
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const userRoutes = require("./routes/User");

app.get("/", (req, res) => {
	res.send("Hello world");
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRoutes);
conn();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
