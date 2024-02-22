// Importo las referencias a los inputs y botones del formulario
const {
  movietitle,
  movieyear,
  directormovie,
  movieduration,
  generemovie,
  ratemovie,
  urlposter,
  cleanbottom,
  sendbottom,
} = require("./constform");

// Función para limpiar los campos del formulario
const cleanform = () => {
  movietitle.value = "";
  movieyear.value = "";
  directormovie.value = "";
  movieduration.value = "";
  generemovie.value = "";
  ratemovie.value = "";
  urlposter.value = "";
};

module.exports = { cleanform };
