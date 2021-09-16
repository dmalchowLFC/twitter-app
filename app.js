const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

app.use("/api", require("./routes/search"));
app.use("/api", require("./routes/favorite"));

app.use("/", express.static(path.join(__dirname, "client/build")));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => console.log(`app.js is running on ${port}!`));