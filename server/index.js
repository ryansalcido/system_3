require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const baseRouter = require("./routes");
const apiErrorHandler = require("./middleware/apiErrorHandler");
const PORT = process.env.SYSTEM_3_PORT || 8444;

app.disable("x-powered-by");

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.MONGO_DB_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

app.use("/system-3", baseRouter);
app.use(apiErrorHandler);

const publicPath = path.join(__dirname, "build");
app.use("/system-3", express.static(publicPath));
app.use("/system-3/*", express.static(publicPath));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));