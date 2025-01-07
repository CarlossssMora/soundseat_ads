import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TicketContext } from './ticketContext';
import { jsPDF } from 'jspdf';
import QRCode from 'qrcode'; // Importar la librería para generar QR
import '../stylesheets/purchaseTickets.css';

const PurchaseTickets = () => {
  const navigate = useNavigate();
  const { selectedSeats, totalPrice, eventDetails } = useContext(TicketContext);

  if (!eventDetails) {
    return (
      <div className="error">
        <h1>Error</h1>
        <p>No se encontraron detalles de la compra.</p>
        <button onClick={() => navigate('/')} className="action-button">
          Volver a la página principal
        </button>
      </div>
    );
  }

  // Función para generar el PDF con el QR
  const handleDownloadPDF = async () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Detalles de tu Boleto', 10, 10);
    doc.text(`Evento: ${eventDetails.title}`, 10, 20);
    doc.text(`Artista: ${eventDetails.artist}`, 10, 30);
    doc.text(`Fecha: ${eventDetails.date}`, 10, 40);
    doc.text(`Hora: ${eventDetails.time}`, 10, 50);
    doc.text('Asientos:', 10, 60);

    selectedSeats.forEach((seat, index) => {
      doc.text(`- ${seat.id} (Sección: ${seat.sectionName})`, 10, 70 + index * 10);
    });

    doc.text(`Total Pagado: $${totalPrice.toFixed(2)}`, 10, 90 + selectedSeats.length * 10);

    // Generar el código QR con los datos del boleto
    const qrData = JSON.stringify({
      event: eventDetails.title,
      artist: eventDetails.artist,
      date: eventDetails.date,
      time: eventDetails.time,
      seats: selectedSeats.map((seat) => ({
        id: seat.id,
        section: seat.sectionName,
      })),
      total: totalPrice,
    });

    try {
      const qrCodeDataURL = await QRCode.toDataURL(qrData);
      doc.addImage(qrCodeDataURL, 'PNG', 10, 100 + selectedSeats.length * 10, 50, 50);
      doc.save('boleto.pdf');
    } catch (error) {
      console.error('Error generando el código QR:', error);
      alert('Ocurrió un error al generar el código QR.');
    }
  };

  return (
    <div className="purchase-tickets-container">
      <div className="purchase-message">
        <h1>Gracias por tu compra</h1>
        <p>Tu transacción ha sido procesada correctamente.</p>
      </div>

      <div className="purchase-summary">
        <h2>Detalles de tu compra</h2>
        <p><strong>Evento:</strong> {eventDetails.title}</p>
        <p><strong>Artista:</strong> {eventDetails.artist}</p>
        <p><strong>Fecha:</strong> {eventDetails.date}</p>
        <p><strong>Hora:</strong> {eventDetails.time}</p>
        <p>
          <strong>Asientos:</strong>
          {selectedSeats.map((seat) => (
            <span key={seat.id}>
              {seat.id} (Sección: {seat.sectionName}),
            </span>
          ))}
        </p>
        <p><strong>Total Pagado:</strong> ${totalPrice.toFixed(2)}</p>
      </div>

      <div className="purchase-actions">
        <button className="action-button" onClick={() => navigate('/')}>
          Volver a la página principal
        </button>
        <button className="action-button" onClick={handleDownloadPDF}>
          Descargar Boleto (PDF)
        </button>
      </div>
    </div>
  );
};

export default PurchaseTickets;
