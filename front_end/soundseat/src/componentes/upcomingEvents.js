import React from 'react';
import EventCard from './eventCard';
import '../stylesheets/upcomingEvents.css';

function UpcomingEvents({ events }) {
    return (
        <div className="upcoming-events">
        <h2 className="section-title">Próximos Eventos</h2>
        <div className="events-grid">
            {events.map((event) => (
            <EventCard key={event.id} event={event} />
            ))}
        </div>
        </div>
    );
}

export default UpcomingEvents;
