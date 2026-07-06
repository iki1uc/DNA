const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
    res.json({ px: "active" });
});

module.exports = router;

