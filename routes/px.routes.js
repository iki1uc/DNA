const express = require('express');
const router = express.Router();

router.get('/trigger', (req, res) => {
    res.json({ event: "PX Trigger ausgelöst" });
});

router.get('/slot/:id', (req, res) => {
    res.json({ px_slot: req.params.id });
});

module.exports = router;
