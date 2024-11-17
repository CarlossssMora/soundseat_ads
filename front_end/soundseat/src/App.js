import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';
import Nav from './componentes/nav';
import Footer from './componentes/footer';
import FeaturedEvent from './componentes/featuredEvent';
import UpcomingEvents from './componentes/upcomingEvents';
import EventDetails from './componentes/eventDetails'
import BuyTickets from './componentes/buyTickets'; 

// EVENTOS DESTACADOS
const mockFeaturedEvents = [
  {
    id: 1,
    title: 'Tour 2024',
    artist: 'Grupo Marrano',
    description: 'Un increíble concierto de la banda más sonada en México.',
    date: '12/11/2024',
    time: '20:00',
    longDescription: 'Grupo Marrano es una banda de rock alternativo originaria de México, conocida por su estilo irreverente y su fusión de géneros. Durante este concierto, el público podrá disfrutar de los mayores éxitos de la banda, así como de algunas canciones inéditas. Prepárate para una noche llena de energía, guitarras poderosas y una puesta en escena impresionante que te hará cantar y bailar durante todo el evento.',
    image: '/grupo_marrano.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/gpomarrano' },
      { icon: 'twitter', url: 'https://x.com/marranooficial?lang=es' },
      { icon: 'instagram', url: 'https://www.instagram.com/gpomarrano?igsh=a2VlbWo5bW5jaGw=' },
    ],
  },
  {
    id: 2,
    title: 'Miel de Azar Tour',
    artist: 'Siddhartha',
    description: 'Disfruta del mejor concierto de música clásica de la historia.',
    date: '12/09/2024',
    time: '18:00',
    longDescription: 'Este evento es una oportunidad única para vivir la majestuosidad de la música clásica en su máxima expresión. La Orquesta Filarmónica, dirigida por un renombrado director, interpretará las más grandes composiciones de Beethoven, como la Sinfonía No. 5 y la Sinfonía No. 9. Este concierto no solo es una celebración de la música clásica, sino también una experiencia que te transportará a otro tiempo con su poder emocional y su complejidad musical.',
    image: '/siddhartha.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/siddharthamusica/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/IamSiddhartha' },
      { icon: 'instagram', url: 'https://www.instagram.com/iamsiddhartha?igsh=MXAwYXB2MDZmaXpydg==' },
    ],
  },
  {
    id: 3,
    title: 'Kygo World Tour 2024',
    artist: 'Kygo',
    date: '11/22/2024',
    time: '21:00',
    longDescription: 'Kygo es uno de los DJs más destacados en la escena de la música electrónica tropical house. En este concierto, los asistentes tendrán la oportunidad de disfrutar de una mezcla de ritmos tropicales y sonidos electrónicos que han conquistado las principales listas de éxitos internacionales. Con su característico estilo melódico, Kygo promete ofrecer una noche llena de energía, buenas vibras y una producción visual impresionante.',
    image: '/kygo.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/kygoofficial/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/KygoMusic' },
      { icon: 'instagram', url: 'https://www.instagram.com/kygomusic?igsh=czlyMXZ3b2I4Mmw3' },
    ],
  },
  {
    id: 4,
    title: 'The Big Steppers Tour',
    artist: 'Kendrick Lamar',
    description: 'Sé parte de una gran experiencia con K-Dot',
    date: '01/22/2025',
    time: '20:00',
    longDescription: 'Kendrick Lamar, uno de los artistas más influyentes del hip-hop contemporáneo, llevará su increíble talento y sus letras poderosas a este evento único. El concierto presentará los temas más representativos de su carrera, incluyendo los de su último álbum. Además, Kendrick Lamar es conocido por su increíble capacidad para conectar con el público, lo que garantiza una experiencia musical y emocional que quedará grabada en la memoria de todos los asistentes.',
    image: '/kendrick_lamar.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/kendricklamar/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/kendricklamar?lang=es' },
      { icon: 'instagram', url: 'https://www.instagram.com/kendricklamar?igsh=MXdjMXd3MHp1bjExbg==' },
    ],
  },
];

// EVENTOS PRÓXIMOS
const mockUpcomingEvents = [
  {
    id: 5,
    title: 'Endless 2 Tour 2024',
    artist: 'Frank Ocean',
    description: 'Vive el regreso de este gran artista en Endless Tour 2',
    date: '12/15/2024',
    time: '19:00',
    longDescription: 'Frank Ocean, uno de los artistas más enigmáticos y aclamados de la música contemporánea, regresa a los escenarios con su nuevo tour. En este concierto, Frank presentará su más reciente trabajo musical, así como algunas de sus canciones más emblemáticas. Con su estilo único que mezcla R&B, soul y música electrónica, Frank Ocean promete una noche llena de momentos íntimos y una atmósfera única que solo él sabe crear.',
    image: '/frank_ocean.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/frankocean/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/frankoccean?lang=es' },
      { icon: 'instagram', url: 'https://www.instagram.com/blonded?igsh=MWRtanZpamZkdGVvMA==' },
    ],
  },
  {
    id: 6,
    title: 'Luis Miguel Tour',
    artist: 'Luis Miguel',
    description: 'El Sol de México en concierto.',
    date: '12/20/2024',
    time: '20:00',
    longDescription: 'Luis Miguel, el icónico Sol de México, regresa a los escenarios con una serie de conciertos que no te puedes perder. Con su voz inconfundible y su impresionante presencia en el escenario, Luis Miguel interpretará algunos de los mayores éxitos de su carrera, así como canciones de su más reciente álbum. Este concierto promete ser una celebración de su legado musical y una noche llena de emoción para todos sus fans.',
    image: '/luis_miguel.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/luismiguelofficial/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/lmxlm?lang=es' },
      { icon: 'instagram', url: 'https://www.instagram.com/luismiguel?igsh=MWVjcHdhcjl6azltdA==' },
    ],
  },
  {
    id: 7,
    title: 'Circus Maximus Tour',
    artist: 'Travis Scott',
    description: 'La gran presencia de La Flame',
    date: '12/31/2024',
    time: '22:00',
    longDescription: 'Travis Scott, conocido por su energía desbordante y su presencia magnética en el escenario, trae su esperado tour a la ciudad. Este evento será una explosión de música trap, hip-hop y efectos visuales impresionantes que harán que el público se sienta parte de la experiencia. Con temas como "SICKO MODE" y "Goosebumps", Travis Scott promete una noche inolvidable llena de adrenalina y ritmo.',
    image: '/travis_scott.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/travisscottlaflame/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/trvisXX' },
      { icon: 'instagram', url: 'https://www.instagram.com/travisscott?igsh=MWQxZnlqZmQ3dnNjeQ==' },
    ],
  },
  {
    id: 8,
    title: 'Rammstein World Tour 2025',
    artist: 'Rammstein',
    description: 'Experimenta lo inolvidable con Rammstein',
    date: '01/05/2025',
    time: '19:00',
    longDescription: 'Rammstein es una de las bandas más grandes del metal industrial, conocida por sus espectaculares y polémicas presentaciones en vivo. En este concierto, los fans podrán disfrutar de una selección de los éxitos más grandes de la banda, con una puesta en escena que incluye efectos pirotécnicos, luces intensas y un sonido imponente. Si eres fanático del metal y la música de alto voltaje, este evento es una cita obligada.',
    image: '/rammstein.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/Rammstein/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/rsprachrohr' },
      { icon: 'instagram', url: 'https://www.instagram.com/rammsteinofficial?igsh=YTZmM3RscXo0c3dq' },
    ],
  },
  {
    id: 9,
    title: 'Chromakopia World Tour',
    artist: 'Tyler, The Creator',
    description: 'Disfruta del nuevo tour Chromakopia',
    date: '01/18/2025',
    time: '21:00',
    longDescription: 'Tyler, The Creator, uno de los artistas más innovadores y creativos de la escena musical actual, presenta su nuevo tour "Chromakopia". En este concierto, Tyler ofrecerá una mezcla de sus éxitos más conocidos junto con su más reciente música experimental. Con su estilo único, que combina hip-hop, rap alternativo y elementos visuales de vanguardia, Tyler promete un espectáculo que desafiará las expectativas y dejará a su audiencia maravillada.',
    image: '/tyler_thecreator.jpg', // Cambia por la ruta de la imagen
    socialLinks: [
      { icon: 'facebook', url: 'https://www.facebook.com/TylerTheCreator/?locale=es_LA' },
      { icon: 'twitter', url: 'https://x.com/tylerthecreator' },
      { icon: 'instagram', url: 'https://www.instagram.com/feliciathegoat?igsh=b28zMnRuZnE0NzE3' },
    ],
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="main-content">
          <Routes>
            {/* Ruta principal */}
            <Route
              path="/"
              element={
                <>
                  <FeaturedEvent events={mockFeaturedEvents} />
                  <UpcomingEvents events={mockUpcomingEvents} />
                </>
              }
            />
            {/* Ruta dinámica para detalles del evento */}
            <Route
              path="/event/:id"
              element={<EventDetails events={[...mockFeaturedEvents, ...mockUpcomingEvents]} />}
            />
            {/* Ruta para la compra de boletos */}
            <Route
              path="/buy-tickets/:id"
              element={<BuyTickets />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
