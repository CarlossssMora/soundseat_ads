// firebaseConfig.js
const admin = require("firebase-admin");
const serviceAccount = require("./confi.json"); // Ajusta esta ruta según la ubicación de tu archivo JSON

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "soundseat-eb38c.firebaseapp.com" // Reemplaza con tu databaseURL
});

const db = admin.firestore();
module.exports = { admin, db };
