class movie {
  constructor({ Id, title, year, director, duration, genre, rate, poster }) {
    Id;
    title;
    year;
    director;
    duration;
    genre;
    rate;
    poster;
  }
}

class savemovie {
  constructor() {
    this.movies = [];
    this.Id = 0;
  }
  getmovies() {
    return this.movies;
  }
  addmovies(newmovie) {
    this.Id++;
    const newinstanmovie = new movie({ ...newmovie, Id: this.Id });
    this.movies.push(newinstanmovie);
  }
}

module.exports = { savemovie, movie };
