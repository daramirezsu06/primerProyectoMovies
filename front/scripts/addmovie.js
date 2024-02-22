// importo Axios y las referencias de los imputs y botones del formulario
const axios = require("axios");
const { cleanform } = require("./clearform");
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

// Función para validar los datos del formulario
function validainpust({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) {
  if (
    !title ||
    !year ||
    !director ||
    !duration ||
    !genre[0] ||
    !rate ||
    !poster
  )
    return "Todos los cambios son obligatorios";
  if (director.length < 5 || director.length > 50)
    return "Director debe contener entre 5 y 50 caracteres";
  if (isNaN(rate) || rate < 1 || rate > 10)
    return "El rating debe ser un n{umero entre 1 y 10";
  if (!poster.includes("https://")) return "El poster debe ser una URL válida";
  return null;
}

// Función para enviar una película al servidor
const sendmovie = async () => {
  try {
    // almacena los value de los imputs
    const title = movietitle.value;
    const year = movieyear.value;
    const director = directormovie.value;
    const duration = movieduration.value;
    const genre = generemovie.value.split(" ");
    const rate = ratemovie.value;
    const poster = urlposter.value;

    // creo un objeto con los datos almacenados
    const movie = {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    };
    // realizo validacion de los valores enviandolos como argumento a la funcion validadora definida arribade esta
    const error1 = validainpust(movie);
    if (error1) return alert(error1);

    // Realiza una solicitud POST al servidor enviando movie en el body
    const promesa = await axios.post("http://localhost:3000/movies", movie);
    console.log(movie);
    
    console.log(promesa.data);
    console.log(promesa);
  } catch (error) {
    console.log(error);
    console.log(error.response.data.message);
  }
};

// Función para agregar eventos a los botones del formulario para exportarla y utilizarla en el index
function addbutons() {
  cleanbottom?.addEventListener("click", cleanform);
  sendbottom?.addEventListener("click", sendmovie);
}

module.exports = { addbutons };

// if (!title || !year || !director || !duration || !genre || !rate || !poster) {
//   alert("todos los campos se deben diligenciar");
//   return;
// }
