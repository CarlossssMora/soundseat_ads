const express = require("express");
const router = express.Router();
const firebase = require("../firebase");

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const response = await firebase.get("/users.json");
    const users = response.data ? Object.values(response.data) : [];
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const newUser = req.body;
    await firebase.post("/users.json", newUser);
    res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
