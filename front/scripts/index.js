const renderhtml = require("./recorre");
const { addbutons } = require("./addmovie");
const addpeli = document.getElementById("addpeli");

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
