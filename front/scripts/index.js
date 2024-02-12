const { savemovie, movie } = require("./priclass");

const renderMovies = require("./rendermovies");

renderMovies();

/*function renderMovies() {
  const arraymovies = tempData.map((pelicula) => addMovie(pelicula));
  arraymovies.forEach((element) => {
    principalContent.appendChild(element);
  });
}*/

/*window.addEventListener("DOMContentLoaded", renderMovies);*/
