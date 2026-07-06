const express = require('express');
const router = express.Router();

router.get('/scan', (req, res) => {
    res.json({ ghost: "Scan gestartet" });
});

module.exports = router;

