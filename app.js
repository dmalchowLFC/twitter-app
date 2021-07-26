const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'client/build')))
app.get("/search", (req, res) => {
    res.send("Hello from search page")
})

app.listen(3000, () => console.log('app.js is running!'));
