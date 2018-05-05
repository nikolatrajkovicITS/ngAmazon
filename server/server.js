const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.json({
        user: 'Nikola Trajkovic'
    });
});

app.listen(3030, err => {
    console.log("Run on port 3030");
});