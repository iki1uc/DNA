const express = require('express');
const router = express.Router();
const axi = require('../core/axi_link');

router.get('/modules', (req, res) => {
    res.json(axi.modules());
});

module.exports = router;

