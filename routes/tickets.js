// routes/tickets.js
const express = require("express");
const router = express.Router();
const { db } = require("../firebase");

// Crear un boleto
router.post("/", async (req, res) => {
  try {
    const { usuario_id, evento_id, asiento } = req.body;
    const newTicketRef = db.collection("boletos").doc();
    await newTicketRef.set({ usuario_id, evento_id, asiento, comprado: true });
    res.status(201).json({ id: newTicketRef.id, usuario_id, evento_id, asiento });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el boleto" });
  }
});

// Obtener todos los boletos
router.get("/", async (req, res) => {
  try {
    const ticketsSnapshot = await db.collection("boletos").get();
    const tickets = ticketsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener boletos" });
  }
});

module.exports = router;
