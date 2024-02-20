const { moviecontroller } = require("../controllers/movieController");
const { Router } = require("express");

const movierouter = Router();

movierouter.get("/", moviecontroller);

module.exports = movierouter;
