// Importa la app creada  servidor.js y a dbconfig de bdconfig.js
const app = require("./src/server");
const dbconfig = require("./src/config/bdconfig");
const PORT = 3000;


// dbconfig() que me devuelve una promesa y una vez se conecta a la BD inicialiso el servidor
dbconfig().then((res) => {
  app.listen(PORT, () => {
    console.log(`el servidor esta escuchando en el http://localhost:${PORT}`);
  });
});
