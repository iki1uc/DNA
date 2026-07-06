const express = require('express');
const router = express.Router();

router.get('/:tp', (req, res) => {
    res.json({ tp: req.params.tp });
});

module.exports = router;

