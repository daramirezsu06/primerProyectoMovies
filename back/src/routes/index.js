const { Router } = require("express");
const movierouter = require("./movieRouter");
const router = Router();

// Defini la ruta base para las rutas relacionadas con las películas y alli 
router.use("/movies", movierouter);

module.exports = router;
