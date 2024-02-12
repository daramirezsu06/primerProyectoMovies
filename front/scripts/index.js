const { savemovie, movie } = require("./priclass");
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

renderMovies();

/*function renderMovies() {
  const arraymovies = tempData.map((pelicula) => addMovie(pelicula));
  arraymovies.forEach((element) => {
    principalContent.appendChild(element);
  });
}*/

/*window.addEventListener("DOMContentLoaded", renderMovies);*/
