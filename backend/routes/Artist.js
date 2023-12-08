const express = require("express");
const router = express.Router();
const {Artist} = require("../models");

router.get("/", async (req, res) => {
    const listOfArtist = await Artist.findAll();
    res.json(listOfArtist);
});

router.post("/", async (req, res) => {
    const post = req.body;

    await Artist.create(post);
    res.json(post);
});

module.exports = router;