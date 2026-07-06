
const express = require('express');
const router = express.Router();

router.get('/flow', (req, res) => {
    res.json({ pipe: "Pipeline aktiv" });
});

module.exports = router;
