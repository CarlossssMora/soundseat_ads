import React from 'react';
import './stylesheets/App.css';
import Nav from './componentes/nav';
import Footer from './componentes/footer';
import FeaturedEvent from './componentes/featuredEvent';
import UpcomingEvents from './componentes/upcomingEvents';

//EVENTOS
const mockFeaturedEvent = {
  id: 1,
  title: 'Grupo Marrano',
  description: 'Un increíble concierto de la banda mas sonado en México.',
  date: '12/11/2024',
  time: '20:00',
  image: '/grupo_marrano.jpg', // Cambia por la ruta de la imagen
};

const mockUpcomingEvents = [
  {
    id: 2,
    title: 'Bethoveen',
    description: 'Disfruta de el mejor concierto de música clásica de la historia.',
    date: '12/9/2024',
    time: '18:00',
    image: '/beethoven.jpg', // Cambia por la ruta de la imagen
  },

  {
    id: 3,
    title: 'Kygo',
    description: 'Presencia al mejor dj de tropical house.',
    date: '11/22/2024',
    time: '21:00',
    image: '/kygo.jpg', // Cambia por la ruta de la imagen
  },
];

function App() {
  return (
    <div className="App">
      <Nav /> 
      <div className="main-content">{/* Aquí va tu comentario */}
        <FeaturedEvent event={mockFeaturedEvent} />
        <UpcomingEvents events={mockUpcomingEvents}/>
      </div> 
      <Footer />
    </div>
  );
}

export default App;
