const express = require("express");
const router = express.Router();
const { database } = require("../firebase");

router.post("/", async (req, res) => {
  try {
    const ticket = req.body;
    const ref = database.ref("tickets").push();
    await ref.set(ticket);
    res.status(201).json({ message: "Ticket registrado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
