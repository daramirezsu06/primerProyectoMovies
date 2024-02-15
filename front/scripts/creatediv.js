function addMovie({
  Id,
  title,
  year,
  director,
  duration,
  genre = [],
  rate,
  poster,
}) {
  const moviecart = document.createElement("div");
  moviecart.classList.add("col-md-4", "mb-3"); // Agrega las clases de Bootstrap para el diseño responsivo

  moviecart.innerHTML = `
    <div id="${Id}" class="cardmovie">
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

module.exports = addMovie;
