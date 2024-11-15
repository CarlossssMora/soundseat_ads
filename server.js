// server.js
require('dotenv').config();
const express = require("express");
const { db } = require("./firebase"); // Importa tu configuración de Firebase
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Para procesar JSON en las solicitudes

// Rutas
app.use("/users", require("./routes/users"));
app.use("/events", require("./routes/events"));
app.use("/tickets", require("./routes/tickets"));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
