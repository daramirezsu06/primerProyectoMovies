
const axios = require("axios");

const renderMovies = async function () {
  try {
    const promesa = await axios.get(
      "https://students-api.2.us-1.fl0.io/movies"
    );
    return promesa.data;
  } catch (error) {
    console.log(error);
  }
};

//  $.get("https://students-api.2.us-1.fl0.io/movies", (movies, state) => {
//    

//    movies.forEach((pelicula) => {
//      const moviecart = addMovie(pelicula);
//      principalContent.appendChild(moviecart);
//    });

//    console.log(state);
//  });

module.exports = renderMovies;
