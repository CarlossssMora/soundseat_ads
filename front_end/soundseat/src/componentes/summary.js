import React from 'react';
import { useNavigate } from 'react-router-dom';

const Summary = ({ selectedSeats, total, onRemoveSeat, onClearSeats }) => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate('/purchase-tickets'); // Ruta a la que se dirigirá
  };

  return (
    <div>
      <h3>Resumen de Asientos</h3>
      {selectedSeats.length > 0 ? (
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat.id}>
              <span>Asiento: {seat.id}, Precio: ${seat.price}</span>
              <button
                onClick={() => onRemoveSeat(seat)}
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
