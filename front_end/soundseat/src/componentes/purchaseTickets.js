import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../stylesheets/purchaseTickets.css';

const PurchaseTickets = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Detalles de la compra recibidos desde `SeatSelection`
  const purchaseDetails = location.state || {};

  if (!purchaseDetails.event) {
    return (
      <div className="error">
        <h1>Error</h1>
        <p>No se encontraron detalles de la compra.</p>
        <button onClick={() => navigate('/')}>Volver a la página principal</button>
      </div>
    );
  }

  return (
    <div className="purchase-tickets-container">
      <div className="purchase-message">
        <h1>Gracias por tu compra</h1>
        <p>Tu transacción ha sido procesada correctamente.</p>
      </div>

      {/* Resumen de la compra */}
      <div className="purchase-summary">
        <h2>Detalles de tu compra</h2>
        <p>
          <strong>Evento:</strong> {purchaseDetails.event.title}
        </p>
        <p>
          <strong>Artista:</strong> {purchaseDetails.event.artist}
        </p>
        <p>
          <strong>Fecha:</strong> {purchaseDetails.event.date}
        </p>
        <p>
          <strong>Hora:</strong> {purchaseDetails.event.time}
        </p>
        <p>
          <strong>Sección:</strong> {purchaseDetails.section}
        </p>
        <p>
          <strong>Asientos:</strong>{' '}
          {purchaseDetails.seats.map((seat) => `${seat.id}`).join(', ')}
        </p>
        <p>
          <strong>Total Pagado:</strong> ${purchaseDetails.total.toFixed(2)}
        </p>
      </div>

      {/* Botón para volver a la página principal */}
      <div className="purchase-actions">
        <button className="back-to-home" onClick={() => navigate('/')}>
          Volver a la página principal
        </button>
      </div>
    </div>
  );
};

export default PurchaseTickets;
