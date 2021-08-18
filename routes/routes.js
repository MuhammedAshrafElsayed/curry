const express = require('express');
const router = express.Router();

router.get('/sim-swap', require('../modules/sim-swap'));

module.exports = router;