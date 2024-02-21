const mongoose = require("mongoose");

const schemamovie = new mongoose.Schema({
  title: String,
  year: Number,
  director: String,
  duration: String,
  genre: Object,
  rate: Number,
  poster: String,
});

const Movie = mongoose.model("movie", schemamovie);

module.exports = Movie;
