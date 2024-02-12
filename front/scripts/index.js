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
  moviecart.classList.add("col-md-4"); // Agrega las clases de Bootstrap para el diseño responsivo

  moviecart.innerHTML = `
    <div class="cardmovie">
    <div class="card bg-white p-4 border  ">
      <img class="imgmovie card-img-top mx-auto" src="${poster}" alt="Card image cap">
      <div class="cardinfo d-flex flex-column justify-content-between">
        <h5>${title}</h5>
        <p>Año ${year} | Director: ${director} | ${duration} | ${rate} (Puntuación de la película) | ${genre.join(
    ", "
  )} </p>
        <p class="card-text"><small class="text-muted">Todo público</small></p>
      </div>
    </div>
      
    </div>
    `;

  return moviecart;
}

function renderMovies() {
  $.get("https://students-api.2.us-1.fl0.io/movies", (movies, state) => {
    const cardDeck = document.createElement("div");


    movies.forEach((pelicula) => {
      const moviecart = addMovie(pelicula);
      principalContent.appendChild(moviecart);
    });

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
