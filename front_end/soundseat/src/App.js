import React, { useState } from 'react';
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


function App() {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para búsqueda por texto
  const [selectedDate, setSelectedDate] = useState(null); // Estado para búsqueda por fecha


  return (
    <TicketProvider>
      <Router>
        <div className="App">
          {/* Pasar estados y funciones al Nav */}
          <Nav
            onSearch={({ date, text }) => {
              setSelectedDate(date);
              setSearchQuery(text);
            }}
          />
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* Renderizar FeaturedEvent con o sin búsqueda */}
                    <FeaturedEvent
                      isSearchMode={!!(searchQuery || selectedDate)}
                    />
                    {/* Renderizar UpcomingEvents con o sin búsqueda */}
                    <UpcomingEvents
                      isSearchMode={!!(searchQuery || selectedDate)}
                    />
                  </>
                }
              />
              {/* Detalles del evento */}
              <Route
                path="/event/:id"
                element={<EventDetails/>}
              />
              {/* Selección de asientos */}
              <Route path="/buy-tickets/:id" element={<SeatSelection />} />
              {/* Simulación de pago */}
              <Route
                path="/payment-simulation"
                element={<PaymentSimulation />}
              />
              {/* Confirmación de compra */}
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

