// importe Mongoose para conectarse a la base de datos MongoDB
const mongoose = require("mongoose");
// importamos el módulo dotenv para cargar variables de entorno desde un archivo .env
require("dotenv").config();

// funcion para conectar la base de datos utilizando la URI proporcionada en la variable de entorno MONGO_URI (esta no funcionara en el github ya que añado el .env a gitignore)
const dbconfig = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = dbconfig;
