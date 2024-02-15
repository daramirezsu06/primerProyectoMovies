const express = require("express");
const router = require("./routes/movieRouter");

const app = express();
app.use(router);

module.exports = app;
