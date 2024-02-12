const addMovie = require("./creatediv");
const principalContent = document.getElementById("moviesConten");
function renderMovies() {
  $.get("https://students-api.2.us-1.fl0.io/movies", (movies, state) => {
    const cardDeck = document.createElement("div");

    movies.forEach((pelicula) => {
      const moviecart = addMovie(pelicula);
      principalContent.appendChild(moviecart);
    });

    console.log(state);
  });
}

module.exports = renderMovies;
