console.log(tempData);

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
  const infomovie = document.createElement("div");
  const imgcart = document.createElement("div");
  const mtitle = document.createElement("h1");
  const myear = document.createElement("p");
  const mimagenpeli = document.createElement("img");
  const mdirector = document.createElement("p");
  const mduration = document.createElement("p");
  const mgenre = document.createElement("p");
  const mrate = document.createElement("p");

  mtitle.textContent = title;
  myear.textContent = year;
  mdirector.innerHTML = director;
  mimagenpeli.src = poster;
  mduration.textContent = duration;
  mgenre.textContent = genre.join(", ");
  mrate.textContent = `${rate} :star:`;
  moviecart.className = "moviescarts";
  imgcart.className = "imgcontent";
  infomovie.className = "infocontent";

  infomovie.appendChild(myear);
  infomovie.appendChild(mdirector);
  infomovie.appendChild(mduration);
  infomovie.appendChild(mgenre);
  infomovie.appendChild(mrate);

  imgcart.appendChild(mimagenpeli);

  moviecart.appendChild(mtitle);
  moviecart.appendChild(imgcart);
  moviecart.appendChild(infomovie);

  return moviecart;
}

const arraymovies = tempData.map((pelicula) => addMovie(pelicula));

arraymovies.forEach((element) => {
  principalContent.appendChild(element);
});

function renderMovies(listamovies) {
  principalContent.appendChild(listamovies);
}
