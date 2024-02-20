const Modelmovie = require("../models/moviemodel");
module.exports = {
  getMovies: async () => {
    try {
      const movies = await Modelmovie.find();
      return movies;
    } catch (error) {
      console.log(error);
    }
  },
};
