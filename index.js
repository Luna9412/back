const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { config } = require("dotenv");
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use("/", require("./src/modulos/historial.js"));
app.use("/", require("./src/modulos/citizen.js"));
app.use("/", require("./src/modulos/delitos.js"));
app.use("/", require("./src/modulos/especie.js"));
app.use("/", require("./src/modulos/roles.js"));
app.use("/", require("./src/modulos/usuario.js")); 
app.use("/", require("./src/modulos/gradoDelito.js")); 
app.listen(PORT, () => {
  console.log(`Server running in : 4100 `);
});
