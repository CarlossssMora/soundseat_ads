import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TicketContext } from './ticketContext';
import axios from 'axios';
import '../stylesheets/simulacionPago.css';

const PaymentSimulation = () => {
  const { selectedSeats, totalPrice, eventDetails } = useContext(TicketContext);
  const navigate = useNavigate();

  // Estados para los datos del formulario
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [error, setError] = useState('');

  // Validación y manejo de confirmación de pago
  const handlePayment = async () => {
    setError('');

    // Validar número de tarjeta (16 dígitos)
    if (!/^\d{16}$/.test(cardNumber)) {
      setError('El número de tarjeta debe tener 16 dígitos.');
      return;
    }

    // Validar fecha de vencimiento (formato mm/yy)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      setError('La fecha de vencimiento debe estar en formato MM/YY.');
      return;
    }

    // Validar CVV (3 dígitos)
    if (!/^\d{3}$/.test(cvv)) {
      setError('El CVV debe tener exactamente 3 dígitos.');
      return;
    }

    // Validar que los correos electrónicos coincidan
    if (email !== confirmEmail) {
      setError('Los correos electrónicos no coinciden.');
      return;
    }

    // Validar que todos los campos estén completos
    if (!cardNumber || !expiryDate || !cvv || !email || !confirmEmail) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Validar que existan datos de asientos y del evento
    if (!selectedSeats || selectedSeats.length === 0) {
      setError('No has seleccionado ningún asiento.');
      return;
    }

    if (!eventDetails || !eventDetails.id) {
      setError('No se encontraron los detalles del evento. Por favor, vuelve a intentar.');
      return;
    }

    try {
      // Llamar a la API para actualizar los asientos
      console.log('Enviando datos al servidor:', {
        seats: selectedSeats.map((seat) => seat.id),
      });

      await axios.post(`http://localhost:5000/api/events/${eventDetails.id}/update-seats`, {
        seats: selectedSeats.map((seat) => seat.id), // Enviar solo los IDs de los asientos
      });

      alert('Pago realizado con éxito');
      navigate('/purchase-tickets'); // Redirige a la página de confirmación de compra
    } catch (error) {
      console.error('Error al actualizar los asientos:', error);
      setError('Ocurrió un error al procesar el pago. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="payment-simulation">
      <h2>Pago</h2>
      <p><strong>Evento:</strong> {eventDetails?.title || 'No disponible'}</p>
      <p><strong>Artista:</strong> {eventDetails?.artist || 'No disponible'}</p>
      <p><strong>Total:</strong> ${totalPrice}</p>
      <ul>
        {selectedSeats.map((seat) => (
          <li key={seat.id}>
            Asiento: {seat.id}, Sección: {seat.sectionName}, Precio: ${seat.price}
          </li>
        ))}
      </ul>

      <h3>Datos de Pago</h3>
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <label htmlFor="cardNumber">Número de Tarjeta:</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="1234567812345678"
          value={cardNumber}
          maxLength="16"
          onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))} // Solo números
        />
      </div>
      <div className="form-group">
        <label htmlFor="expiryDate">Fecha de Vencimiento:</label>
        <input
          type="text"
          id="expiryDate"
          placeholder="MM/YY"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cvv">CVV (3 dígitos):</label>
        <input
          type="text"
          id="cvv"
          placeholder="123"
          value={cvv}
          maxLength="3"
          onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))} // Solo números
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmEmail">Confirmar Correo Electrónico:</label>
        <input
          type="email"
          id="confirmEmail"
          placeholder="correo@ejemplo.com"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
      </div>

      <button onClick={handlePayment}>Confirmar Pago</button>
    </div>
  );
};

export default PaymentSimulation;
