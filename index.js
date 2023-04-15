const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "./client/assets")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/src/index.html"));
});

app.listen(8080, () => {
    console.log("Started...");
});
