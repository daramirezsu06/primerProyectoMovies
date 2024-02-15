const app = require("./src/server");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`el servidor esta escuchando en el http://localhost:${PORT}`);
});
