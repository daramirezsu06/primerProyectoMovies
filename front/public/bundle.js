(()=>{var e={304:e=>{e.exports=function({Id:e,title:t,year:o,director:s,duration:i,genre:n=[],rate:r,poster:c}){const d=document.createElement("div");return d.classList.add("col-md-4"),d.innerHTML=`\n    <div id="${e}" class="cardmovie">\n    <div class="card bg-white p-4 border  ">\n      <img class="imgmovie card-img-top mx-auto" src="${c}" alt="Card image cap">\n      <div class="cardinfo d-flex flex-column justify-content-between">\n        <h5>${t}</h5>\n        <p>Año ${o} | Director: ${s} | ${i} | ${r} (Puntuación de la película) | ${n.join(", ")} </p>\n        <p class="card-text"><small class="text-muted">Todo público</small></p>\n      </div>\n    </div>\n      \n    </div>\n    `,d}},189:e=>{class t{constructor({Id:e,title:t,year:o,director:s,duration:i,genre:n,rate:r,poster:c}){}}e.exports={savemovie:class{constructor(){this.movies=[],this.Id=0}getmovies(){return this.movies}addmovies(e){this.Id++;const o=new t({...e,Id:this.Id});this.movies.push(o)}},movie:t}},704:(e,t,o)=>{const s=o(304),i=document.getElementById("moviesConten");e.exports=function(){$.get("https://students-api.2.us-1.fl0.io/movies",((e,t)=>{document.createElement("div"),e.forEach((e=>{const t=s(e);i.appendChild(t)})),console.log(t)}))}}},t={};function o(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}(()=>{const{savemovie:e,movie:t}=o(189);o(704)()})()})();