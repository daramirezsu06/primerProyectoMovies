const renderMovies = require("./rendermovies");
const addMovie = require("./creatediv");

const renderhtml = async function () {
  try {
    const principalContent = document.getElementById("moviesConten");
    const movies = await renderMovies();
    movies.forEach((pelicula) => {
      const moviecart = addMovie(pelicula);
      principalContent.appendChild(moviecart);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderhtml;
