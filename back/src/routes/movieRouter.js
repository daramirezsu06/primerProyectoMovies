const { Router } = require("express");
const { moviecontroller } = require("../controllers/movieController");

const router = Router();

router.get("/movies", moviecontroller);

module.exports = router;
