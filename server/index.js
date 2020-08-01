require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.SYSTEM_3_PORT || 8444;

app.disable("x-powered-by");

app.use(express.json());

const publicPath = path.join(__dirname, "build");
app.use("/system-3", express.static(publicPath));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));