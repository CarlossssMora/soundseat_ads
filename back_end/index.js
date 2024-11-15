// index.js

//CREAR EVENTO
const express = require("express");
const { db } = require("./firebase");
const app = express();

app.use(express.json());

// Ruta para crear un nuevo evento
app.post("/create-event", async (req, res) => {
  const { name, date, location, description } = req.body;

  try {
    const eventRef = db.collection("events").doc();
    await eventRef.set({
      name,
      date,
      location,
      description,
      likes: 0, // Para los 'me gusta'
    });
    res.status(201).send({ message: "Evento creado exitosamente" });
  } catch (error) {
    res.status(500).send({ message: "Error al crear el evento", error });
  }
});


// Ruta para obtener todos los eventos
app.get("/events", async (req, res) => {
    try {
      const eventsSnapshot = await db.collection("events").get();
      const events = eventsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).send(events);
    } catch (error) {
      res.status(500).send({ message: "Error al obtener los eventos", error });
    }
  });

  
  // Ruta para realizar la compra de boletos
app.post("/buy-tickets", async (req, res) => {
    const { eventId, userId, seats } = req.body;
  
    try {
      // Verificar disponibilidad de asientos
      const eventRef = db.collection("events").doc(eventId);
      const eventDoc = await eventRef.get();
      if (!eventDoc.exists) {
        return res.status(404).send({ message: "Evento no encontrado" });
      }
  
      // Aquí podríamos agregar lógica para verificar si los asientos están disponibles
      // y reservarlos para el usuario actual
  
      // Registrar la compra en la colección de compras
      const purchaseRef = db.collection("purchases").doc();
      await purchaseRef.set({
        userId,
        eventId,
        seats,
        purchaseDate: new Date(),
      });
  
      res.status(201).send({ message: "Compra realizada exitosamente" });
    } catch (error) {
      res.status(500).send({ message: "Error al realizar la compra", error });
    }
  });

  

  // Ruta para dar "me gusta" a un evento
app.post("/like-event", async (req, res) => {
    const { eventId } = req.body;
  
    try {
      const eventRef = db.collection("events").doc(eventId);
      await eventRef.update({
        likes: admin.firestore.FieldValue.increment(1),
      });
      res.status(200).send({ message: "Me gusta añadido exitosamente" });
    } catch (error) {
      res.status(500).send({ message: "Error al dar 'me gusta'", error });
    }
  });

  

