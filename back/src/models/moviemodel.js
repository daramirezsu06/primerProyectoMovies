// Importa Mongoose para definir el esquema
const mongoose = require("mongoose");
// el esquema de película usando el constructor Schema de Mongoose
const schemamovie = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
    min: [
      1800,
      "no hay peliculas anteriores de {VALUE} las primeras datan de 1800",
    ],
    max: [
      2024,
      "imposible la fecha {VALUE} no puede ser mayor a la actualidad",
    ],
  },
  director: String,
  duration: String,
  genre: Object,
  rate: {
    type: Number,
    min: [1, "no puedes poner un valor menor a {VALUE} "],
    max: [10, "no puedes poner un valor mayor a {VALUE}"],
  },
  poster: String,
});


// Crea el modelo de película basado en el esquema y lo asigna a la colección "movies" (mongo entiende que "movie" es el modelo para cada documento y asume que la coleccion es el plural "movies")
const Movie = mongoose.model("movie", schemamovie);

module.exports = Movie;
