const Movie = require("../models/moviemodel");
module.exports = {
  getMovies: async () => {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.log(error);
    }
  },
  sendmovie: async (movie) => {
    const moviesend = await Movie.create(movie);
  },
};
