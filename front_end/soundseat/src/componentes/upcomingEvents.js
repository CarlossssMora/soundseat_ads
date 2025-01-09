import React, { useState, useEffect } from 'react';
import EventCard from './eventCard'; // Asegúrate de que este componente esté actualizado
import axios from 'axios';
import '../stylesheets/upcomingEvents.css';

function UpcomingEvents({ events: propEvents = [] }) {
    const [localEvents, setLocalEvents] = useState([]); // Estado para almacenar eventos
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado de error

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/events');
                setLocalEvents(response.data); // Guardar los eventos obtenidos desde el backend
                setLoading(false); // Finalizar la carga
            } catch (error) {
                console.error('Error al cargar eventos:', error);
                setError('No se pudieron cargar los eventos.');
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) {
        return <div className="loading">Cargando eventos...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="upcoming-events">
            <h2 className="section-title">Próximos Eventos</h2>
            <div className="events-grid">
                {(propEvents.length > 0 ? propEvents : localEvents).map((event) => (
                    <EventCard key={event.id} eventId={event.id} />
                ))}
            </div>
        </div>
    );
}

export default UpcomingEvents;
