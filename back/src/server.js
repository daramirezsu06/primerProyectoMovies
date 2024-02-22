const express = require("express");
// importo los Middlewares
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index");

const app = express();

// aplicacion de middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// con el enrutador todas mis peticiones van a router que se encuentra la carpeta routes index y de alli los enruto de acuerto a el asunto (en este caso solo hay /movies)

app.use(router);

module.exports = app;
