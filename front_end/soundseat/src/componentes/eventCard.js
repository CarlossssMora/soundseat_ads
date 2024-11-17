import React, { useState } from 'react';
import '../stylesheets/eventCard.css';

function EventCard({ event }) {
    const [likes, setLikes] = useState(0); // Estado para contar los likes

    const handleLike = () => {
        setLikes(likes + 1); // Incrementar los likes al hacer clic
    };

    const goToDetails = () => {
        // Redirigir dinámicamente a la página de detalles usando el ID del evento
        window.location.href = `/event/${event.id}`;
    };

    return (
        <div className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-artist-card">
                    <i className="fas fa-user"></i> {/* Ícono del artista */}
                    <p>{event.artist}</p> {/* Nombre del artista */}
                </div>
                <p className="event-date">
                    <i className="fas fa-calendar-alt"></i> {event.date}
                </p>
                <p className="event-time">
                    <i className="fas fa-clock"></i> {event.time}
                </p>
                {/* Sección de botones en una misma fila */}
                <div className="event-buttons">
                    <button className="event-button-card" onClick={goToDetails}>
                        Ver Detalles
                    </button>
                    <button className="like-button" onClick={handleLike}>
                        ❤️ Like
                    </button>
                    <span className="like-count">{likes} Me gusta</span>
                </div>
            </div>
        </div>
    );
}

export default EventCard;
