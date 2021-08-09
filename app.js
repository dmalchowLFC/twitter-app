const express = require('express');
const path = require('path');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const axios = require('axios');
const bToken = process.env.bearer_token;

app.get('/search', (req, res) => {
    res.send('Getting my search bar working...');
});

axios
    .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=nasa",
        {
            headers: {
                Authorization: `Bearer ${bToken}`,
            },
        })
    .then((response) => console.log(response));
app.use('/', express.static(path.join(__dirname, 'client/build')))


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});



app.listen(port, () => console.log(`app.js is running on ${port}!`));
