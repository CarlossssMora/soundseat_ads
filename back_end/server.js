const express = require('express');
const cors = require('cors');
const eventsRoutes = require('./routes/events');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/events', eventsRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
