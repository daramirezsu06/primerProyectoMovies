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

const sendmovie = async () => {
  try {
    const title = movietitle.value;
    const year = movieyear.value;
    const director = directormovie.value;
    const duration = movieduration.value;
    const genre = generemovie.value.split(",");
    const rate = ratemovie.value;
    const poster = urlposter.value;

    const movie = {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    };
    const error1 = validainpust(movie);
    if (error1) return alert(error1);

    const promesa = await axios.post("http://localhost:3000/movies", movie);
    console.log(movie);
    console.log(promesa);
  } catch (error) {
    console.log(error);
  }
};

function addbutons() {
  cleanbottom?.addEventListener("click", cleanform);
  sendbottom?.addEventListener("click", sendmovie);
}

module.exports = { addbutons };

// if (!title || !year || !director || !duration || !genre || !rate || !poster) {
//   alert("todos los campos se deben diligenciar");
//   return;
// }
