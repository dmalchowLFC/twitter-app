const express = require("express");
const router = express.Router();

const axios = require("axios");
require("dotenv").config();

const { getAccessToken } = require("../token-service");
getAccessToken();

const getEndPoint = (favorite) => {
    const userTimelineEndPoint = `https://api.twitter.com/1.1/statuses/user_timeline.json?`;
    return `${userTimelineEndPoint}screen_name=${favorite}&count=3&tweet_mode=extended`;
};

router.get("/favorite1", async (req, res) => {
    const LFC_URL = getEndPoint("LFC");
    await axios.get(LFC_URL).then((response) => res.send(response.data));
});

router.get("/favorite2", async (req, res) => {
    const wsl_URL = getEndPoint("wsl");
    await axios.get(wsl_URL).then((response) => res.send(response.data));
});

router.get("/favorite3", async (req, res) => {
    const ryanRenolds_URL = getEndPoint("VancityReynolds");
    await axios.get(ryanRenolds_URL).then((response) => res.send(response.data));
});

module.exports = router;