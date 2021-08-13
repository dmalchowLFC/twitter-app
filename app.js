const express = require('express');
const path = require('path');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');
const { res } = require('express');
const bToken = process.env.bearer_token;


app.get('/api/search', async (req, res) => {
    const screen_name = req.query.screen_name;
    await axios
        .get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screen_name}&count=5`,
            {
                headers: { Authorization: `Bearer ${bToken}` },
            })
        .then((response) => {
            if (response != error) {
                res.send(response.data)
            }
            else {
                alert("Screen name not found, please try another name.")
                console.log(error)
            }
        })
});

app.use('/', express.static(path.join(__dirname, 'client/build')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => console.log(`app.js is running on ${port}!`));
