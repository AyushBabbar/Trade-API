const express = require("express");
const mongoose = require("mongoose");
const trade = require("./route/trade");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/', trade);

module.exports = app;