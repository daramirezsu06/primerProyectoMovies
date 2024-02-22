// importo renderMovies que al ejecutarla pide las peliculas a el servidor y la función addMovie que me crea un moviecart
const renderMovies = require("./rendermovies");
const addMovie = require("./creatediv");


// Función para renderizar las moviecarts en el DOM ( agregar las moviecarts al contenedor cin id=moviesConten del html statico)
const renderhtml = async function () {
  try {
    const principalContent = document.getElementById("moviesConten");
    const movies = await renderMovies();
    movies.forEach((pelicula) => {
      const moviecart = addMovie(pelicula);
      principalContent?.appendChild(moviecart);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderhtml;
