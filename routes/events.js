// routes/events.js
const express = require("express");
const router = express.Router();
const { db } = require("../firebase");

// Crear un evento
router.post("/", async (req, res) => {
  try {
    const { nombre, fecha, lugar } = req.body;
    const newEventRef = db.collection("Eventos").doc();
    await newEventRef.set({ nombre, fecha, lugar });
    res.status(201).json({ id: newEventRef.id, nombre, fecha, lugar });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el evento" });
  }
});

// Obtener todos los eventos
router.get("/", async (req, res) => {
  try {
    const eventsSnapshot = await db.collection("Eventos").get();
    const events = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener eventos" });
  }
});

module.exports = router;
