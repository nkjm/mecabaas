'use strict';

const express = require('express');
const router = express.Router();
const Mecab = require('mecab-async');
const mecab = new Mecab();

router.get('/parse', (req, res, next) => {
    if (typeof req.query.text != "string" || req.query.text.trim() == ""){
        res.status(400).send("text not found");
        return;
    }
    const parsedText = mecab.parseSync(req.query.text);
    res.json(parsedText);
});

router.get('/wakachi', (req, res, next) => {
    if (typeof req.query.text != "string" || req.query.text.trim() == ""){
        res.status(400).send("text not found");
        return;
    }
    const parsedText = mecab.wakachiSync(req.query.text);
    res.json(parsedText);
});

module.exports = router;
