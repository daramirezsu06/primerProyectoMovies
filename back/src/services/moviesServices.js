const { movies } = require("./datamovies");
module.exports = {
  getMovies: async () => {
    return movies;
  },
};
