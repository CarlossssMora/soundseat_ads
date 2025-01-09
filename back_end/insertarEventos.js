const { firestore } = require('./firebase'); // Importar Firestore desde firebase.js



const agregarEventos = async () => {
    try {
        const batch = firestore.batch(); // Usar batch para realizar múltiples inserciones
        const eventosCollection = firestore.collection('eventos');

        eventos.forEach((evento) => {
            const docRef = eventosCollection.doc(evento.id.toString()); // Usar el ID del evento como identificador del documento
            batch.set(docRef, evento);
        });

        await batch.commit(); // Confirmar las inserciones en Firestore
        console.log('Eventos agregados con éxito!');
    } catch (error) {
        console.error('Error al agregar eventos:', error);
    }
};

// Ejecutar la función
agregarEventos();
