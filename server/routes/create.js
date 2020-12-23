const router = require("express").Router();
const isLoggedIn = require("../helpers/isLoggedIn");
const { customAlphabet } = require("nanoid/non-secure");
const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 5);
const Party = require("../models/party.model");
const Player = require("../models/player.model");
const mongoose = require("mongoose");

router.route("/").get(isLoggedIn, function (req, res) {
    console.log(req.user);

    const party = new Party({
        code: nanoid()
    });

    party.players.push(new Player({
        player: req.user._id,
        target: null,
        isAdmin: true,
        party: party._id
    }));

    party.save().then((p) => {
        console.log(p);
        res.status(200).send(p.code);
    });
});

module.exports = router;