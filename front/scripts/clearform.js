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
