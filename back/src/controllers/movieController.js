const moviesServices = require("../services/moviesServices");

const moviecontroller = async (req, res) => {
  try {
    const respuesta = await moviesServices.getMovies();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

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
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { moviecontroller, sendmoviecontroller };
