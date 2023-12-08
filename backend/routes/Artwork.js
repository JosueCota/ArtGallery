const express = require("express");
const router = express.Router();
const {Artwork} = require("../models");

router.get("/", async (req, res) => {
    const listOfArtworks = await Artwork.findAll();
    res.json(listOfArtworks);
});

router.post("/", async (req, res) => {
    const post = req.body;

    await Artwork.create(post);
    res.json(post);
});

module.exports = router;