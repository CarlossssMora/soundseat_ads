// routes/users.js
const express = require("express");
const router = express.Router();
const { db } = require("../firebase");

// Crear un usuario
router.post("/", async (req, res) => {
  try {
    const { nombre, email } = req.body;
    const newUserRef = db.collection("Usuarios").doc();
    await newUserRef.set({ nombre, email });
    res.status(201).json({ id: newUserRef.id, nombre, email });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
});

// Obtener todos los usuarios
router.get("/", async (req, res) => {
    try {
      const usersSnapshot = await db.collection("Usuarios").get();
      const users = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener usuarios" });
    }
  });
  

module.exports = router;
