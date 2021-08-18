'use strict';

const express = require('express');
const app = express();

app.use(require('./routes/routes'));
app.listen('8084', () => {
    console.log('alexa','server started at 8084' );
});

module.exports = app;
