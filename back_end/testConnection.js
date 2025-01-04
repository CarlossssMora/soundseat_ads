const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

const firestore = admin.firestore();
const database = admin.database();

// Prueba Firestore
const testFirestore = async () => {
  try {
    const snapshot = await firestore.collection("eventos").get();
    console.log("Conexión a Firestore exitosa. Datos:");
    snapshot.forEach(doc => console.log(doc.id, "=>", doc.data()));
  } catch (error) {
    console.error("Error al conectar a Firestore:", error.message);
  }
};

// Prueba Realtime Database
const testRealtime = async () => {
  try {
    const snapshot = await database.ref("eventos").once("value");
    console.log("Conexión a Realtime Database exitosa. Datos:", snapshot.val());
  } catch (error) {
    console.error("Error al conectar a Realtime Database:", error.message);
  }
};

// Ejecutar las pruebas
testFirestore();
testRealtime();
