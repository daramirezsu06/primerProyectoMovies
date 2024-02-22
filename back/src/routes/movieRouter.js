// Importa los controladores relacionados con las películas
const {
  moviecontroller,
  sendmoviecontroller,
} = require("../controllers/movieController");
const { Router } = require("express");

// Crea una instancia del enrutador de express
const movierouter = Router();

// Define las rutas para las peticiones GET  Y POST acia los controladores
movierouter.get("/", moviecontroller);
movierouter.post("/", sendmoviecontroller);

module.exports = movierouter;
