const app = require("./src/server");
const dbconfig = require("./src/config/bdconfig");
const PORT = 3000;

dbconfig().then((res) => {
  app.listen(PORT, () => {
    console.log(`el servidor esta escuchando en el http://localhost:${PORT}`);
  });
});
