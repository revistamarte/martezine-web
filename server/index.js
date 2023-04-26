import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";
import childprocess from "child_process";
import "dotenv/config.js";

// if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "dev") {
//     dotenv.config();
// }

import mongoose from "mongoose";
mongoose.connect(process.env.DATABASE_URL, { dbName: process.env.DATABASE_NAME });
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to database."));

const app = express();
app.use(express.json());
import routes from "./routes/index.js";
app.use("/api", routes);
const clientPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "../client/build");
app.use(express.static(clientPath));
app.get("*", (req, res) => res.sendFile(path.join(clientPath, "./index.html")));

app.listen(process.env.PORT, () => {
    console.log("Started...");
    console.log(`Listening to ${process.env.PORT}...`);
    if (process.argv.indexOf("--open") !== -1) {
        var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
        childprocess.exec(start + ' http://localhost:8080');
    }
});
