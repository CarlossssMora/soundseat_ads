import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../stylesheets/eventDetails.css';

function EventDetails({ events }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const event = events.find((e) => e.id === parseInt(id, 10));

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
                    {/* Sección del artista con ícono */}
                    <div className="event-detail">
                        <i className="fas fa-user"></i> {/* Ícono de usuario */}
                        <div className="event-detail-content">
                            <span>Artista:</span>
                            <span>{event.artist}</span> {/* Nombre del artista */}
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
                        <button className="buy-ticket" onClick={() => navigate(`/buy/${event.id}`)}>
                            Comprar boletos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;
