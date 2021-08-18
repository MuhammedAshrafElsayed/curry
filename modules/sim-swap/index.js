const express = require('express');
const router = express.Router();

const doSwap = (req, res, next) => {
    downloadOrder().confirmOrder().returns();
    res.send('sent');
};

router.use('/', doSwap);

module.exports = router;