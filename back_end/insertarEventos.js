const { firestore } = require('./firebase'); // Importar Firestore desde firebase.js

const eventos = [
    {
        id: 1,
        title: "Grupo Marrano en Concierto",
        description: "Un increíble concierto de la banda más sonada en México.",
        artist: "Grupo Marrano",
        date: "2025-01-25",
        time: "20:00",
        image: "/grupo_marrano.jpg",
        longDescription: "Prepárate para una noche llena de diversión, música y sorpresas. Grupo Marrano trae lo mejor de sus éxitos junto con algunas sorpresas que no querrás perderte. Ven a disfrutar de una experiencia única que hará vibrar tus sentidos.",
        socialLinks: [
            { icon: "facebook", url: "https://facebook.com/grupomarrano" },
            { icon: 'twitter', url: 'https://x.com/marranooficial?lang=es' },
            { icon: "instagram", url: "https://instagram.com/grupomarrano" }
        ]
    },
    {
        id: 2,
        title: "Luis Miguel Tour",
        description: "El Sol de México en concierto.",
        artist: "Luis Miguel",
        date: "2025-02-25",
        time: "21:00",
        image: "/luis_miguel.jpg",
        longDescription: "Acompaña a Luis Miguel en su espectacular gira por México. Disfruta de sus clásicos inmortales y nuevos éxitos en un espectáculo que solo El Sol puede ofrecer. Una experiencia que quedará grabada en tu memoria para siempre.",
        socialLinks: [
            { icon: 'facebook', url: 'https://facebook.com/lmoficial' },
            { icon: 'twitter', url: 'https://x.com/lmoficial' },
            { icon: 'instagram', url: 'https://instagram.com/lmoficial' }
        ]
    },
    {
        id: 3,
        title: "Travis Scott - Circus Maximus Tour",
        description: "La gran presencia de La Flame en un espectáculo inolvidable.",
        artist: "Travis Scott",
        date: "2025-03-25",
        time: "22:00",
        image: "/travis_scott.jpg",
        longDescription: "Prepárate para un show lleno de energía y éxitos icónicos de Travis Scott. Desde sus producciones más legendarias hasta sus nuevas creaciones, este evento promete ser un viaje visual y sonoro único. No te lo pierdas.",
        socialLinks: [
            { icon: "facebook", url: "https://facebook.com/travisscott" },
            { icon: "twitter", url: "https://twitter.com/travisscott" },
            { icon: "instagram", url: "https://instagram.com/travisscott" }
        ]
    },
    {
        id: 4,
        title: "Rammstein World Tour 2025",
        description: "Experimenta lo inolvidable con Rammstein.",
        artist: "Rammstein",
        date: "2025-04-25",
        time: "19:00",
        image: "/rammstein.jpg",
        longDescription: "Una de las bandas más legendarias del metal industrial regresa con su impresionante espectáculo en vivo. Luces, fuego y un sonido que sacudirá tu alma son solo el inicio de lo que será una noche épica.",
        socialLinks: [
            { icon: "facebook", url: "https://facebook.com/rammstein" },
            { icon: "twitter", url: "https://twitter.com/travisscott" },
            { icon: "instagram", url: "https://instagram.com/rammstein" }
        ]
    },
    {
        id: 5,
        title: "Frank Ocean - Endless 2 Tour",
        description: "Vive el regreso de Frank Ocean en Endless Tour 2.",
        artist: "Frank Ocean",
        date: "2025-05-25",
        time: "19:00",
        image: "/frank_ocean.jpg",
        longDescription: "Frank Ocean vuelve a los escenarios con una propuesta musical única que fusiona melancolía, ritmo y poesía. Prepárate para una experiencia mágica e íntima que conectará con tus emociones más profundas.",
        socialLinks: [
            { icon: "facebook", url: "https://facebook.com/frankocean" },
            { icon: "twitter", url: "https://twitter.com/frankocean" },
            { icon: "instagram", url: "https://instagram.com/frankocean" }
        ]
    }
];

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
