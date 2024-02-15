const moviesServices = require("../services/moviesServices");

const moviecontroller = async (req, res) => {
  try {
    const respuesta = await moviesServices.getMovies();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { moviecontroller };
