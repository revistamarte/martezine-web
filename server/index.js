const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(8080, () => {
    console.log("Started...");

    if (process.argv.indexOf("--open") !== -1) {
        var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
        require('child_process').exec(start + ' http://localhost:8080');
    }
});
