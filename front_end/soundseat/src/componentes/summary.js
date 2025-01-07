import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TicketContext } from './ticketContext'; // Asegúrate de que la ruta sea correcta

const Summary = ({ selectedSeats, total, onRemoveSeat, onClearSeats, event }) => {
  const navigate = useNavigate();
  const { setSelectedSeats, setTotalPrice, setEventDetails } = useContext(TicketContext); // Acceder al contexto

  const handlePurchase = () => {
    if (!event) {
      alert('No se pudo obtener la información del evento.');
      return;
    }

    // Guardar asientos, total y detalles del evento en el contexto global
    setSelectedSeats(selectedSeats);
    setTotalPrice(total);
    setEventDetails({
      title: event.title || 'Evento no disponible',
      artist: event.artist || 'Artista no disponible',
      date: event.date || 'Fecha no disponible',
      time: event.time || 'Hora no disponible',
    });

    // Redirigir a la simulación de pago
    navigate('/payment-simulation');
  };

  return (
    <div>
      <h3>Resumen de Asientos</h3>
      {selectedSeats.length > 0 ? (
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat.id}>
              <span>
                Asiento: {seat.id}, Sección: {seat.sectionName}, Precio: ${seat.price}
              </span>
              <button
                onClick={() => onRemoveSeat(seat.id)} // Pasar solo el ID del asiento
                className="delete-button"
                aria-label="Eliminar asiento"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se han seleccionado asientos.</p>
      )}
      {selectedSeats.length > 0 && (
        <div className="summary-actions">
          <button onClick={onClearSeats} className="clear-button">
            Eliminar Todos
          </button>
          <button onClick={handlePurchase} className="buy-button">
            Comprar
          </button>
        </div>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Summary;
