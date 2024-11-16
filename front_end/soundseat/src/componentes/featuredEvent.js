import React from 'react';
import '../stylesheets/featuredEvent.css';

function FeaturedEvent({ event }) {
    return (
        <div className="featured-event" style={{ backgroundImage: `url(${event.image})` }}>
        <div className="featured-event-details">
            <h1 className="event-title">{event.title}</h1>
            <p className="event-description">{event.description}</p>
            <p className="event-date">
            <i className="fas fa-calendar-alt"></i> {event.date}
            </p>
            <p className="event-time">
            <i className="fas fa-clock"></i> {event.time}
            </p>
            <a href="#details" className="event-button">Ver Boletos</a>
        </div>
        </div>
    );
}

export default FeaturedEvent;

