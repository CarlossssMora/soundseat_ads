import React from 'react';
import './stylesheets/App.css';
import Nav from './componentes/nav';
import Footer from './componentes/footer';
import FeaturedEvent from './componentes/featuredEvent';
import UpcomingEvents from './componentes/upcomingEvents';

// EVENTOS DESTACADOS
const mockFeaturedEvents = [
  {
    id: 1,
    title: 'Grupo Marrano',
    description: 'Un increíble concierto de la banda más sonada en México.',
    date: '12/11/2024',
    time: '20:00',
    image: '/grupo_marrano.jpg', // Cambia por la ruta de la imagen
  },
  {
    id: 2,
    title: 'Beethoven',
    description: 'Disfruta del mejor concierto de música clásica de la historia.',
    date: '12/09/2024',
    time: '18:00',
    image: '/beethoven.jpg', // Cambia por la ruta de la imagen
  },
  {
    id: 3,
    title: 'Kygo',
    description: 'Presencia al mejor DJ de tropical house.',
    date: '11/22/2024',
    time: '21:00',
    image: '/kygo.jpg', // Cambia por la ruta de la imagen
  },
  {
    id: 4,
    title: 'Kendrick Lamar',
    description: 'Sé parte de una gran experiencia con K-Dot',
    date: '01/22/2025',
    time: '20:00',
    image: '/kendrick_lamar.jpg', // Cambia por la ruta de la imagen
  },
];

// EVENTOS PRÓXIMOS
const mockUpcomingEvents = [
  {
    id: 5,
    title: 'Frank Ocean',
    description: 'Vive el regreso de este gran artista en Endless Tour 2',
    date: '12/15/2024',
    time: '19:00',
    image: '/frank_ocean.jpg', // Cambia por la ruta de la imagen
  },
  {
    id: 6,
    title: 'Luis Miguel',
    description: 'El Sol de México en concierto.',
    date: '12/20/2024',
    time: '20:00',
    image: '/luis_miguel.jpg', // Cambia por la ruta de la imagen
  },
  {
    id: 7,
    title: 'Travis Scott',
    description: 'La gran presencia de La Flame',
    date: '12/31/2024',
    time: '22:00',
    image: '/travis_scott.jpg', // Cambia por la ruta de la imagen
  },
  {
    id: 8,
    title: 'Rammstein',
    description: 'Experimenta lo inolvidable con Rammstein',
    date: '01/05/2025',
    time: '19:00',
    image: '/rammstein.jpg', // Cambia por la ruta de la imagen
  },
  {
    id: 9,
    title: 'Tyler, The Creator',
    description: 'Disfruta del nuevo tour Chromakopia',
    date: '01/18/2025',
    time: '21:00',
    image: '/tyler_thecreator.jpg', // Cambia por la ruta de la imagen
  },
];

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-content">
        {/* Evento destacado con carrusel */}
        <FeaturedEvent events={mockFeaturedEvents} />
        
        {/* Eventos próximos */}
        <UpcomingEvents events={mockUpcomingEvents} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
