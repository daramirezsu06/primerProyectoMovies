// Obtiene referencias a los inputs del formulario y los botones
const movietitle = document.getElementById("movietitle");
const movieyear = document.getElementById("movieyear");
const directormovie = document.getElementById("directormovie");
const movieduration = document.getElementById("movieduration");
const generemovie = document.getElementById("generemovie");
const ratemovie = document.getElementById("ratemovie");
const urlposter = document.getElementById("urlposter");
const cleanbottom = document.getElementById("clenform");
const sendbottom = document.getElementById("sendmovie");

// Exporta los elementos para ser utilizados en addmovie.js y en clearform 
module.exports = {
  movietitle,
  movieyear,
  directormovie,
  movieduration,
  generemovie,
  ratemovie,
  urlposter,
  cleanbottom,
  sendbottom,
};
