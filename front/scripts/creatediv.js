// Función para crear un elemento HTML que representa una película
function addMovie({
  _id,
  title,
  year,
  director,
  duration,
  genre = [],
  rate,
  poster,
  __v,
}) {
  // Crea un nuevo elemento div para la película y Agrega clases de Bootstrap
  const moviecart = document.createElement("div");
  moviecart.classList.add("col-md-4", "mb-3");
  // Inserta el contenido HTML utilizando teplate literals
  moviecart.innerHTML = `
    <div id="${_id}" class="cardmovie">
    <div class="card bg-white p-4 border  ">
      <img class="imgmovie card-img-top mx-auto" src="${poster}" alt="Card image cap">
      <div class="cardinfo d-flex flex-column justify-content-between">
        <h5>${title}</h5>
        <p>Año ${year} | Director: ${director} | ${duration} | ${rate} (Puntuación de la película) | ${genre.join(
    ", "
  )} </p>
        <p class="card-text"><small class="text-muted">Todo público ${__v}</small></p>
        <button class="btn btn-primary btn-block">Eliminar pelicula</button>

      </div>
    </div>
      
    </div>
    `;
  // Retorna el elemento HTML que representa la película
  return moviecart;
}

module.exports = addMovie;
