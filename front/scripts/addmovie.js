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

const sendmovie = async () => {
  try {
    const title = movietitle.value;
    const year = movieyear.value;
    const director = directormovie.value;
    const duration = movieduration.value;
    const genre = generemovie.value.split(",");
    const rate = ratemovie.value;
    const poster = urlposter.value;
    if (
      !title ||
      !year ||
      !director ||
      !duration ||
      !genre ||
      !rate ||
      !poster
    ) {
      alert("todos los campos se deben diligenciar");
      return;
    }
    const promesa = await axios.post("http://localhost:3000/movies", {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    console.log({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    console.log(promesa);
  } catch (error) {
    console.log(error);
  }
};

function addbutons() {
  cleanbottom.addEventListener("click", cleanform);
  sendbottom.addEventListener("click", sendmovie);
}

module.exports = { addbutons };
