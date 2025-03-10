// Importar libreria para manejo de ficheros de configuración
require("dotenv").config({
  path : `.env.${process.env.NODE_ENV || "development"}`
});
// Importar fichero de configuración con variables de entorno
const config = require('./config/config');
// Importar librería express --> web server
const express = require("express");
// Importar librería path, para manejar rutas de ficheros en el servidor
const path = require("path");
// Importar libreria CORS
const cors = require("cors");
// Importar gestores de rutas
const festivalRoutes = require("./routes/festivalRoutes");
const actividadRoutes = require("./routes/actividadRoutes");

const app = express();

// Configurar middleware para analizar JSON en las solicitudes
app.use(express.json());
// Configurar CORS para admitir cualquier origen
//app.use(cors());

// Configurar rutas de la API Rest
app.use("/api/festival", festivalRoutes);
app.use("/api/actividad", actividadRoutes);

// Configurar el middleware para servir archivos estáticos desde el directorio 'public\old_js_vainilla'
app.use(express.static(path.join(__dirname, "public")));

//Ruta para manejar las solicitudes al archivo index.html
// app.get('/', (req, res) => {
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar el servidor

if (process.env.NODE_ENV !== "test") {
  app.listen(config.port, () => {
  console.log(`Servidor escuchando en el puerto ${config.port}`);
  });
  }

  module.exports = app; // Exportar el módulo app para ser usado en testeo

