const {
  moviecontroller,
  sendmoviecontroller,
} = require("../controllers/movieController");
const { Router } = require("express");

const movierouter = Router();

movierouter.get("/", moviecontroller);
movierouter.post("/", sendmoviecontroller);

module.exports = movierouter;
