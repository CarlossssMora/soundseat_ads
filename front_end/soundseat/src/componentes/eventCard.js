import React, { useState, useEffect } from 'react';
import '../stylesheets/eventCard.css';
import axios from 'axios';

function EventCard({ eventId }) {
    const [event, setEvent] = useState(null); // Estado para almacenar los datos del evento
    const [likes, setLikes] = useState(0); // Estado para contar los likes

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/events/${eventId}`);
                setEvent(response.data); // Guardar los datos del evento
                const savedLikes = localStorage.getItem(`likes-${eventId}`);
                setLikes(savedLikes ? parseInt(savedLikes, 10) : 0); // Recuperar likes desde localStorage
            } catch (error) {
                console.error('Error al cargar los datos del evento:', error);
            }
        };

        fetchEvent();
    }, [eventId]);

    const handleLike = () => {
        const newLikes = likes + 1;
        setLikes(newLikes); // Incrementar los likes
        localStorage.setItem(`likes-${eventId}`, newLikes); // Guardar los likes en localStorage
    };

    const goToDetails = () => {
        // Redirigir dinámicamente a la página de detalles usando el ID del evento
        window.location.href = `/event/${eventId}`;
    };

    if (!event) {
        return <div className="loading">Cargando evento...</div>;
    }

    return (
        <div className="event-card">
            <img
                src={event.image || '/images/default-image.jpg'} // Imagen del evento
                alt={event.title}
                className="event-image"
            />
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
