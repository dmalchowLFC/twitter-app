const express = require('express');
const path = require('path');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');
const bToken = process.env.bearer_token;
const screenName = '';

app.get('/search', (req, res) => {
    console.log(res);
});

axios
    .get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screenName}&count=5`,
        {
            headers: { Authorization: `Bearer ${bToken}` },
        })
    .then((response) => console.log(response.data));

app.use('/', express.static(path.join(__dirname, 'client/build')))


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});



app.listen(port, () => console.log(`app.js is running on ${port}!`));
