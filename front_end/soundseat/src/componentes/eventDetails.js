import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/eventDetails.css';

function EventDetails() {
    const { id } = useParams(); // Obtener el ID del evento desde la URL
    const navigate = useNavigate(); // Navegación programática
    const [event, setEvent] = useState(null); // Estado para almacenar los datos del evento
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado de error

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                // Llamada al backend para obtener los detalles del evento
                const response = await axios.get(`http://localhost:5000/api/events/${id}`);
                setEvent(response.data); // Guardar los datos del evento
            } catch (error) {
                setError('No se pudo cargar la información del evento.');
            } finally {
                setLoading(false); // Finalizar la carga
            }
        };

        fetchEventDetails();
    }, [id]);

    if (loading) {
        return <div className="loading">Cargando detalles del evento...</div>;
    }

    if (error) {
        return (
            <div className="event-details-container">
                <h1 className="event-details-title">Error</h1>
                <p className="error-message">{error}</p>
                <div className="event-details-back">
                    <button className="back-to-home" onClick={() => navigate('/')}>
                        Volver a la página de inicio
                    </button>
                </div>
            </div>
        );
    }

    if (!event) {
        return (
            <div className="event-details-container">
                <h1 className="event-details-title">Evento no encontrado</h1>
                <div className="event-details-back">
                    <button className="back-to-home" onClick={() => navigate('/')}>
                        Volver a la página de inicio
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="event-details-container">
            <img src={event.image} alt={event.title} className="event-details-image" />
            <div className="event-details-content">
                <h1 className="event-details-title">{event.title}</h1>
                <p className="event-details-description">{event.description}</p>

                <div className="event-details-divider"></div>

                {/* Detalles del evento */}
                <h2>Detalles del evento</h2>
                <div className="event-details-info">
                    <div className="event-detail">
                        <i className="fas fa-user"></i>
                        <div className="event-detail-content">
                            <span>Artista:</span>
                            <span>{event.artist}</span>
                        </div>
                    </div>
                    <div className="event-detail">
                        <i className="fas fa-calendar-alt"></i>
                        <div className="event-detail-content">
                            <span>Fecha:</span>
                            <span>{event.date}</span>
                        </div>
                    </div>
                    <div className="event-detail">
                        <i className="fas fa-clock"></i>
                        <div className="event-detail-content">
                            <span>Hora:</span>
                            <span>{event.time}</span>
                        </div>
                    </div>
                </div>

                <div className="event-details-divider"></div>

                <h3>Descripción</h3>
                <p className="event-details-long-description">{event.longDescription}</p>

                <div className="event-details-divider"></div>

                {/* Nueva sección de Redes Sociales */}
                <h3>Redes Sociales</h3>
                <div className="event-details-socials">
                    <p className="socials-text">Visita las redes sociales de {event.artist}</p>
                    <div className="social-links">
                        {event.socialLinks.map((link) => (
                            <a
                                key={link.icon}
                                href={link.url}
                                className="social-item"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={`fab fa-${link.icon} social-icon`}></i>
                                <span>{link.icon.charAt(0).toUpperCase() + link.icon.slice(1)}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="event-details-buttons">
                    <div className="event-details-back">
                        <button className="back-to-home" onClick={() => navigate('/')}>
                            Volver a la página de inicio
                        </button>
                    </div>
                    <div className="event-details-buy-ticket">
                        <button className="buy-ticket" onClick={() => navigate(`/buy-tickets/${event.id}`)}>
                            Comprar boletos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;
