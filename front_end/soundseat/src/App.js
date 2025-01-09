import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';
import Nav from './componentes/nav';
import Footer from './componentes/footer';
import FeaturedEvent from './componentes/featuredEvent';
import UpcomingEvents from './componentes/upcomingEvents';
import EventDetails from './componentes/eventDetails';
import SeatSelection from './componentes/seatSelection';
import PurchaseTickets from './componentes/purchaseTickets';
import PaymentSimulation from './componentes/simulacionPago'; // Simulación de pago
import { TicketProvider } from './componentes/ticketContext'; // Contexto global
import EventCard from './componentes/eventCard'; // Importación del componente de tarjeta

function App() {
  const [allEvents, setAllEvents] = useState([]); // Todos los eventos
  const [filteredEvents, setFilteredEvents] = useState([]); // Eventos filtrados
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Cargar todos los eventos desde la API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setAllEvents(response.data); // Guarda todos los eventos
        setFilteredEvents(response.data); // Inicialmente muestra todos
      } catch (error) {
        console.error('Error al cargar eventos:', error);
      }
    };

    fetchEvents();
  }, []);

  // Manejo de búsqueda
  const handleSearch = ({ date, text }) => {
    const filtered = allEvents.filter((event) => {
      const matchesText =
        text &&
        (event.title.toLowerCase().includes(text.toLowerCase()) ||
          event.artist.toLowerCase().includes(text.toLowerCase()));
  
      let matchesDate = true;
      if (date) {
        const [day, month, year] = date.split('-'); 
        const inputDate = new Date(`${year}-${month}-${day}`);
        const eventDate = new Date(event.date);
        matchesDate = inputDate.getTime() === eventDate.getTime();
      }
  
      return (!text || matchesText) && matchesDate;
    });
  
    setFilteredEvents(filtered);
    setIsSearchActive(!!text || !!date);
  };
  

  return (
    <TicketProvider>
      <Router>
        <div className="App">
          <Nav onSearch={handleSearch} />
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* Renderizado dinámico basado en búsqueda */}
                    {isSearchActive ? (
                      filteredEvents.length > 0 ? (
                        <div className="search-results">
                          {filteredEvents.map((event) => (
                            <EventCard key={event.id} eventId={event.id} />
                          ))}
                        </div>
                      ) : (
                        <p>No se encontraron eventos.</p>
                      )
                    ) : (
                      <>
                        <FeaturedEvent />
                        <UpcomingEvents events={allEvents} />
                      </>
                    )}
                  </>
                }
              />
              <Route path="/event/:id" element={<EventDetails />} />
              <Route path="/buy-tickets/:id" element={<SeatSelection />} />
              <Route path="/payment-simulation" element={<PaymentSimulation />} />
              <Route path="/purchase-tickets" element={<PurchaseTickets />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </TicketProvider>
  );
}

export default App;
