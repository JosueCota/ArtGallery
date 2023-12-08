const express = require("express");
const router = express.Router();
const {Artshows} = require("../models");

router.get("/", async (req, res) => {
    const listOfArtshows = await Artshows.findAll();
    res.json(listOfArtshows);
});

router.post("/", async (req, res) => {
    const post = req.body;

    await Artshows.create(post);
    res.json(post);
});

module.exports = router;