import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../stylesheets/featuredEvent.css';

function FeaturedEvent({ events }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="featured-event-container">
      <Slider {...settings}>
        {events.map((event) => (
          <div key={event.id}>
            <div
              className="featured-event"
              style={{
                backgroundImage: `url(${event.image})`, // Usa la ruta relativa desde la carpeta public
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="featured-event-details">
                <h1 className="event-title">{event.title}</h1>
                <p className="featured-event-description">{event.description}</p>
                <p className="event-date">
                  <i className="fas fa-calendar-alt"></i> {event.date}
                </p>
                <p className="event-time">
                  <i className="fas fa-clock"></i> {event.time}
                </p>
                <a href="#details" className="event-button">Ver Boletos</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedEvent;
