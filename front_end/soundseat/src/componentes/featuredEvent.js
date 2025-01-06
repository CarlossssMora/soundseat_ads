import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../stylesheets/featuredEvent.css';
import EventCard from './eventCard'; // Importar EventCard
import axios from 'axios'; // Cliente HTTP para llamar al backend

function FeaturedEvent({ isSearchMode = false }) {
  const [events, setEvents] = useState([]); // Estado para los eventos
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Configuración del carrusel (react-slick)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Obtener eventos desde el backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events'); // Llama al endpoint del backend
        setEvents(response.data); // Guarda los datos en el estado
        setLoading(false); // Termina la carga
      } catch (err) {
        setError('No se pudieron cargar los eventos.');
        setLoading(false); // Termina la carga
      }
    };

    fetchEvents();
  }, []);

  // Si está cargando, mostrar un spinner o texto de carga
  if (loading) {
    return <div className="loading">Cargando eventos destacados...</div>;
  }

  // Si hay un error, mostrar el mensaje de error
  if (error) {
    return <div className="error">{error}</div>;
  }

  // Función para redirigir a los detalles del evento
  const goToDetails = (id) => {
    window.location.href = `/event/${id}`;
  };

  if (isSearchMode) {
    // Modo de búsqueda: Renderizar eventos destacados como tarjetas
    return (
      <div className="featured-event-search">
        {events.slice(0, 4).map((event) => ( // Mostrar solo los primeros cuatro eventos
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    );
  }

  // Vista principal: Slider de eventos destacados
  return (
    <div className="featured-event-container">
      <Slider {...settings}>
        {events.slice(0, 4).map((event) => ( // Mostrar solo los primeros cuatro eventos
          <div key={event.id}>
            <div
              className="featured-event"
              style={{
                backgroundImage: `url(${event.image})`, // Usa la URL completa proporcionada por el backend
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="featured-event-details">
                <h1 className="event-title">{event.title}</h1>
                <p className="event-artist-featured">{event.artist}</p> {/* Nombre del artista */}
                <p className="featured-event-description">{event.description}</p>
                <p className="event-date">
                  <i className="fas fa-calendar-alt"></i> {event.date}
                </p>
                <p className="event-time">
                  <i className="fas fa-clock"></i> {event.time}
                </p>
                <button
                  className="event-button"
                  onClick={() => goToDetails(event.id)}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedEvent;
