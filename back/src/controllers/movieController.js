// Importa el objeto que contiene los servicios getMovies y sendmovie 
const moviesServices = require("../services/moviesServices");

// Controlador para obtener todas las películas
const moviecontroller = async (req, res) => {
  try {
    const respuesta = await moviesServices.getMovies();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};
// Controlador para enviar una película al DB
const sendmoviecontroller = async (req, res) => {
  try {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const respuesta = await moviesServices.sendmovie({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    res.status(201).json("la pelicula se grabo correctamente");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { moviecontroller, sendmoviecontroller };
