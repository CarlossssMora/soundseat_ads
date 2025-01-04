const express = require('express');
const router = express.Router();
const { firestore } = require('../firebase');

// Obtener todos los eventos
router.get('/', async (req, res) => {
    try {
        const snapshot = await firestore.collection('eventos').get();
        const events = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.json(events);
    } catch (error) {
        console.error('Error al obtener eventos:', error);
        res.status(500).json({ error: 'Error al obtener los eventos.' });
    }
});

// Obtener un evento por ID
router.get('/:id', async (req, res) => {
    try {
        const doc = await firestore.collection('eventos').doc(req.params.id).get();
        if (!doc.exists) {
            return res.status(404).json({ error: 'Evento no encontrado.' });
        }
        res.json({ id: doc.id, ...doc.data() });
    } catch (error) {
        console.error('Error al obtener evento:', error);
        res.status(500).json({ error: 'Error al obtener el evento.' });
    }
});


// Buscar eventos por texto// Ruta para buscar eventos por texto y/o fecha
// Ruta de búsqueda
// Ruta para buscar eventos por texto o fecha// Ruta para buscar eventos por texto o fecha
router.get('/search', async (req, res) => {
    try {
        const { text, date } = req.query;

        // Verifica que al menos un parámetro de búsqueda esté presente
        if (!text && !date) {
            return res.status(400).json({ error: 'Debes proporcionar al menos un parámetro de búsqueda: text o date.' });
        }

        let query = firestore.collection('eventos');

        // Filtro por texto (búsqueda parcial en el título)
        if (text) {
            query = query.where('title', '>=', text).where('title', '<=', text + '\uf8ff');
        }

        // Filtro por fecha exacta
        if (date) {
            query = query.where('date', '==', date);
        }

        const snapshot = await query.get();

        if (snapshot.empty) {
            return res.status(404).json({ error: 'No se encontraron eventos con los criterios proporcionados.' });
        }

        // Mapear los resultados a un arreglo
        const events = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.json(events);
    } catch (error) {
        console.error('Error en la búsqueda de eventos:', error);
        res.status(500).json({ error: 'Error en la búsqueda de eventos.' });
    }
});

  
module.exports = router;
