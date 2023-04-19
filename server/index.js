require("dotenv").config();
const express = require("express");
const path = require("path");
const process = require("process");

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, { dbName: process.env.DATABASE_NAME });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to database."));

const app = express();
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
const routes = require("./routes")
app.use("/api", routes);

app.listen(8080, () => {
    console.log("Started...");
    if (process.argv.indexOf("--open") !== -1) {
        var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
        require('child_process').exec(start + ' http://localhost:8080');
    }
});
