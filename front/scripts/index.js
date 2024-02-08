const principalContent = document.getElementById("moviesConten");

function addMovie({
  title,
  year,
  director,
  duration,
  genre = [],
  rate,
  poster,
}) {
  const moviecart = document.createElement("div");
  const contentonecart = document.createElement("div");
  const infomovie = document.createElement("div");
  const mtitle = document.createElement("h4");
  const myear = document.createElement("p");
  const mimagenpeli = document.createElement("img");
  const mdirector = document.createElement("p");
  const mduration = document.createElement("p");
  const mgenre = document.createElement("p");
  const mrate = document.createElement("p");

  mtitle.textContent = title;
  myear.textContent = `Año: ${year}`;
  mdirector.innerHTML = `Director ${director}`;
  mimagenpeli.src = poster;
  mduration.textContent = `Duracion: ${duration}`;
  mgenre.textContent = `Genero: ${genre.join(", ")}`;
  mrate.textContent = `valoracion: ${rate} :star:`;
  moviecart.className = "moviescarts";
  infomovie.className = "infocontent";
  moviecart.classList.add();
  moviecart.classList.add("card");
  mimagenpeli.classList.add("card-img-top");
  infomovie.classList.add("card-body");
  mtitle.classList.add("card-title");
  contentonecart.classList.add("col-sm");

  infomovie.appendChild(mtitle);
  infomovie.appendChild(myear);
  infomovie.appendChild(mdirector);
  infomovie.appendChild(mduration);
  infomovie.appendChild(mgenre);
  infomovie.appendChild(mrate);

  
  moviecart.appendChild(mimagenpeli);
  moviecart.appendChild(infomovie);
  contentonecart.appendChild(moviecart);

  return contentonecart;
}

/*const arraymovies = tempData.map((pelicula) => addMovie(pelicula));*/

function renderMovies() {
  $.get("https://students-api.2.us-1.fl0.io/movies", (movies, state) => {
    const arraymovies = movies.map((pelicula) => addMovie(pelicula));
    arraymovies.forEach((element) => {
      principalContent.appendChild(element);
    });
    console.log(state);
    console.log(state);
  });
}

renderMovies();

/*function renderMovies() {
  const arraymovies = tempData.map((pelicula) => addMovie(pelicula));
  arraymovies.forEach((element) => {
    principalContent.appendChild(element);
  });
}*/

/*window.addEventListener("DOMContentLoaded", renderMovies);*/
