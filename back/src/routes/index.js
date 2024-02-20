const { Router } = require("express");
const movierouter = require("./movieRouter");
const router = Router();

router.use("/movies", movierouter);

module.exports = router;
