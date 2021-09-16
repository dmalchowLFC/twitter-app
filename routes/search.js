const express = require("express");
const router = express.Router();

const axios = require("axios");
require("dotenv").config();

const { getAccessToken } = require("../token-service");
getAccessToken();

router.get("/search", async (req, res) => {
    const screen_name = req.query.screen_name;
    await axios
        .get(
            `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screen_name}&count=10&tweet_mode=extended`
        )
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.log("Error", error.message);
            res.status(404).send(error.message);
        });
});

module.exports = router;