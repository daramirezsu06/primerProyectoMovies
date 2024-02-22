// Importo el modelo de película
const Movie = require("../models/moviemodel");
module.exports = {
  getMovies: async () => {
    // Metodo para obtener todas las películas de BD
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.log(error);
    }
  },
  // Metodo para enviar una nueva película a BD
  sendmovie: async (movie) => {
    console.log(movie);
    const moviesend = await Movie.create(movie);
  },
};
