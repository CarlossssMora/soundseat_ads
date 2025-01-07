import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';
import Nav from './componentes/nav';
import Footer from './componentes/footer';
import FeaturedEvent from './componentes/featuredEvent';
import UpcomingEvents from './componentes/upcomingEvents';
import EventDetails from './componentes/eventDetails';
import SeatSelection from './componentes/seatSelection';
import PurchaseTickets from './componentes/purchaseTickets';
import PaymentSimulation from './componentes/simulacionPago'; // Simulación de pago
import { TicketProvider } from './componentes/ticketContext'; // Contexto global

// EVENTOS DESTACADOS Y PRÓXIMOS (Mock Data)
const mockFeaturedEvents = [
  {
    id: 2,
    title: 'Miel de Azar Tour',
    artist: 'Siddhartha',
    description: 'Disfruta del mejor concierto de música clásica de la historia.',
    date: '09/12/2024',
    time: '18:00',
    longDescription: 'Este evento es una oportunidad única para vivir la majestuosidad de la música clásica en su máxima expresión. La Orquesta Filarmónica, dirigida por un renombrado director, interpretará las más grandes composiciones de Beethoven, como la Sinfonía No. 5 y la Sinfonía No. 9. Este concierto no solo es una celebración de la música clásica, sino también una experiencia que te transportará a otro tiempo con su poder emocional y su complejidad musical.',
    image: '/siddhartha.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/siddharthamusica/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/IamSiddhartha' },
      { icon: 'instagram', url: 'https://www.instagram.com/iamsiddhartha?igsh=MXAwYXB2MDZmaXpydg==' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 3,
    title: 'Kygo World Tour 2024',
    artist: 'Kygo',
    date: '22/11/2024',
    time: '21:00',
    longDescription: 'Kygo es uno de los DJs más destacados en la escena de la música electrónica tropical house. En este concierto, los asistentes tendrán la oportunidad de disfrutar de una mezcla de ritmos tropicales y sonidos electrónicos que han conquistado las principales listas de éxitos internacionales. Con su característico estilo melódico, Kygo promete ofrecer una noche llena de energía, buenas vibras y una producción visual impresionante.',
    image: '/kygo.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/kygoofficial/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/KygoMusic' },
      { icon: 'instagram', url: 'https://www.instagram.com/kygomusic?igsh=czlyMXZ3b2I4Mmw3' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 4,
    title: 'The Big Steppers Tour',
    artist: 'Kendrick Lamar',
    description: 'Sé parte de una gran experiencia con K-Dot',
    date: '22/01/2025',
    time: '20:00',
    longDescription: 'Kendrick Lamar, uno de los artistas más influyentes del hip-hop contemporáneo, llevará su increíble talento y sus letras poderosas a este evento único. El concierto presentará los temas más representativos de su carrera, incluyendo los de su último álbum. Además, Kendrick Lamar es conocido por su increíble capacidad para conectar con el público, lo que garantiza una experiencia musical y emocional que quedará grabada en la memoria de todos los asistentes.',
    image: '/kendrick_lamar.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/kendricklamar/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/kendricklamar?lang=es' },
      { icon: 'instagram', url: 'https://www.instagram.com/kendricklamar?igsh=MXdjMXd3MHp1bjExbg==' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
];
const mockUpcomingEvents = [
  {
    id: 5,
    title: 'Endless 2 Tour 2024',
    artist: 'Frank Ocean',
    description: 'Vive el regreso de este gran artista en Endless Tour 2',
    date: '15/12/2024',
    time: '19:00',
    longDescription: 'Frank Ocean, uno de los artistas más enigmáticos y aclamados de la música contemporánea, regresa a los escenarios con su nuevo tour. En este concierto, Frank presentará su más reciente trabajo musical, así como algunas de sus canciones más emblemáticas. Con su estilo único que mezcla R&B, soul y música electrónica, Frank Ocean promete una noche llena de momentos íntimos y una atmósfera única que solo él sabe crear.',
    image: '/frank_ocean.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/frankocean/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/frankoccean?lang=es' },
      { icon: 'instagram', url: 'https://www.instagram.com/blonded?igsh=MWRtanZpamZkdGVvMA==' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 6,
    title: 'Luis Miguel Tour',
    artist: 'Luis Miguel',
    description: 'El Sol de México en concierto.',
    date: '20/12/2024',
    time: '20:00',
    longDescription: 'Luis Miguel, el icónico Sol de México, regresa a los escenarios con una serie de conciertos que no te puedes perder. Con su voz inconfundible y su impresionante presencia en el escenario, Luis Miguel interpretará algunos de los mayores éxitos de su carrera, así como canciones de su más reciente álbum. Este concierto promete ser una celebración de su legado musical y una noche llena de emoción para todos sus fans.',
    image: '/luis_miguel.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/luismiguelofficial/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/lmxlm?lang=es' },
      { icon: 'instagram', url: 'https://www.instagram.com/luismiguel?igsh=MWVjcHdhcjl6azltdA==' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 7,
    title: 'Circus Maximus Tour',
    artist: 'Travis Scott',
    description: 'La gran presencia de La Flame',
    date: '31/12/2024',
    time: '22:00',
    longDescription: 'Travis Scott, conocido por su energía desbordante y su presencia magnética en el escenario, trae su esperado tour a la ciudad. Este evento será una explosión de música trap, hip-hop y efectos visuales impresionantes que harán que el público se sienta parte de la experiencia. Con temas como "SICKO MODE" y "Goosebumps", Travis Scott promete una noche inolvidable llena de adrenalina y ritmo.',
    image: '/travis_scott.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/travisscottlaflame/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/trvisXX' },
      { icon: 'instagram', url: 'https://www.instagram.com/travisscott?igsh=MWQxZnlqZmQ3dnNjeQ==' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 8,
    title: 'Rammstein World Tour 2025',
    artist: 'Rammstein',
    description: 'Experimenta lo inolvidable con Rammstein',
    date: '05/01/2025',
    time: '19:00',
    longDescription: 'Rammstein es una de las bandas más grandes del metal industrial, conocida por sus espectaculares y polémicas presentaciones en vivo. En este concierto, los fans podrán disfrutar de una selección de los éxitos más grandes de la banda, con una puesta en escena que incluye efectos pirotécnicos, luces intensas y un sonido imponente. Si eres fanático del metal y la música de alto voltaje, este evento es una cita obligada.',
    image: '/rammstein.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/Rammstein/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/rsprachrohr' },
      { icon: 'instagram', url: 'https://www.instagram.com/rammsteinofficial?igsh=YTZmM3RscXo0c3dq' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  },
  {
    id: 9,
    title: 'Chromakopia World Tour',
    artist: 'Tyler, The Creator',
    description: 'Disfruta del nuevo tour Chromakopia',
    date: '18/01/2025',
    time: '21:00',
    longDescription: 'Tyler, The Creator, uno de los artistas más innovadores y creativos de la escena musical actual, presenta su nuevo tour "Chromakopia". En este concierto, Tyler ofrecerá una mezcla de sus éxitos más conocidos junto con su más reciente música experimental. Con su estilo único, que combina hip-hop, rap alternativo y elementos visuales de vanguardia, Tyler promete un espectáculo que desafiará las expectativas y dejará a su audiencia maravillada.',
    image: '/tyler_thecreator.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/TylerTheCreator/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/tylerthecreator' },
      { icon: 'instagram', url: 'https://www.instagram.com/feliciathegoat?igsh=b28zMnRuZnE0NzE3' },
    ],
    sections: [
      {
        name: 'Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Alta',
        price: 700,
        seats: [
          [{ id: 'TA1', status: 'available' }, { id: 'TA2', status: 'occupied' }],
          [{ id: 'TA3', status: 'available' }, { id: 'TA4', status: 'available' }],
        ],
      },
      {
        name: 'Tlaxcala Baja',
        price: 600,
        seats: [
          [{ id: 'TB1', status: 'available' }, { id: 'TB2', status: 'occupied' }],
          [{ id: 'TB3', status: 'available' }, { id: 'TB4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Oriente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Centro Poniente',
        price: 500,
        seats: [
          [{ id: 'P1', status: 'available' }, { id: 'P2', status: 'occupied' }],
          [{ id: 'P3', status: 'available' }, { id: 'P4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Sur',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Baja Central',
        price: 300,
        seats: [
          [{ id: 'PS1', status: 'available' }, { id: 'PS2', status: 'occupied' }],
          [{ id: 'PS3', status: 'available' }, { id: 'PS4', status: 'available' }],
        ],
      },
      {
        name: 'Pronto Norte',
        price: 300,
        seats: [
          [{ id: 'PN1', status: 'available' }, { id: 'PN2', status: 'occupied' }],
          [{ id: 'PN3', status: 'available' }, { id: 'PN4', status: 'available' }],
        ],
      },
      {
        name: 'Oriente',
        price: 600,
        seats: [
          [{ id: 'O1', status: 'available' }, { id: 'O2', status: 'occupied' }],
          [{ id: 'O3', status: 'available' }, { id: 'O4', status: 'available' }],
        ],
      },
      {
        name: 'Campo',
        price: 0, // Campo decorativo
        seats: [],
      },
    ]
  }, 
];



function App() {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para búsqueda por texto
  const [selectedDate, setSelectedDate] = useState(null); // Estado para búsqueda por fecha

  // Función para convertir un objeto Date a formato dd/MM/yyyy
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Filtrar eventos destacados
  const filteredFeaturedEvents = mockFeaturedEvents.filter((event) => {
    const matchesTitle =
      searchQuery && event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArtist =
      searchQuery && event.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate =
      selectedDate && event.date === formatDate(selectedDate); // Comparar con fecha formateada
    return matchesTitle || matchesArtist || matchesDate;
  });

  // Filtrar eventos próximos
  const filteredUpcomingEvents = mockUpcomingEvents.filter((event) => {
    const matchesTitle =
      searchQuery && event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArtist =
      searchQuery && event.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate =
      selectedDate && event.date === formatDate(selectedDate); // Comparar con fecha formateada
    return matchesTitle || matchesArtist || matchesDate;
  });

  return (
    <TicketProvider>
      <Router>
        <div className="App">
          {/* Pasar estados y funciones al Nav */}
          <Nav
            onSearch={({ date, text }) => {
              setSelectedDate(date);
              setSearchQuery(text);
            }}
          />
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* Renderizar FeaturedEvent con o sin búsqueda */}
                    <FeaturedEvent
                      events={
                        searchQuery || selectedDate
                          ? filteredFeaturedEvents
                          : mockFeaturedEvents
                      }
                      isSearchMode={!!(searchQuery || selectedDate)}
                    />
                    {/* Renderizar UpcomingEvents con o sin búsqueda */}
                    <UpcomingEvents
                      events={
                        searchQuery || selectedDate
                          ? filteredUpcomingEvents
                          : mockUpcomingEvents
                      }
                      isSearchMode={!!(searchQuery || selectedDate)}
                    />
                  </>
                }
              />
              {/* Detalles del evento */}
              <Route
                path="/event/:id"
                element={<EventDetails events={[...mockFeaturedEvents, ...mockUpcomingEvents]} />}
              />
              {/* Selección de asientos */}
              <Route path="/buy-tickets/:id" element={<SeatSelection />} />
              {/* Simulación de pago */}
              <Route
                path="/payment-simulation"
                element={<PaymentSimulation />}
              />
              {/* Confirmación de compra */}
              <Route path="/purchase-tickets" element={<PurchaseTickets />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </TicketProvider>
  );
}

export default App;

