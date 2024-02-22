// importo la función para renderizar las películas y la función para agregar eventos a los botones del formulario
const renderhtml = require("./recorre");
const { addbutons } = require("./addmovie");

// Espero a que el contenido del DOM se carge para ejecutar las funciones de renderizado de peliculas y de agregar eventos a los botones
window.addEventListener("DOMContentLoaded", () => {
  renderhtml();
  addbutons();
});

// const { addbutons } = require("./addmovie");
// const cleanbottom = document.getElementById("clenform");
// const sendbottom = document.getElementById("sendmovie");

// cleanbottom.addEventListener("click", cleanform);
// sendbottom.addEventListener("click", sendmovie);

/*function renderMovies() {
  const arraymovies = tempData.map((pelicula) => addMovie(pelicula));
  arraymovies.forEach((element) => {
    principalContent.appendChild(element);
  });
}*/
