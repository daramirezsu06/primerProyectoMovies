// importo Axios para realizar solicitudes HTTP
const axios = require("axios");

// Función para pedirle las peliculas al servidor
const renderMovies = async function () {
  try {
    const promesa = await axios.get("http://localhost:3000/movies");
    console.log(promesa.data);
    return promesa.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = renderMovies;
