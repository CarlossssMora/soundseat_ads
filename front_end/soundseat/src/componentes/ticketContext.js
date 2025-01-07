// TicketContext.js
import React, { createContext, useState, useEffect } from 'react';

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [eventDetails, setEventDetails] = useState({
    id: '',         // ID único del evento
    title: '',      // Título del evento
    artist: '',     // Artista principal
    date: '',       // Fecha del evento
    time: '',       // Hora del evento
    image: '',      // URL de la imagen
    description: '', // Descripción corta
    longDescription: '', // Descripción detallada
    socialLinks: [], // Enlaces a redes sociales
    sections: [],   // Información de las secciones y asientos
});


  // Calcular el precio total automáticamente cuando cambian los asientos seleccionados
  useEffect(() => {
    const total = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
    setTotalPrice(total);
  }, [selectedSeats]);

  return (
    <TicketContext.Provider
      value={{
        selectedSeats,
        setSelectedSeats,
        totalPrice,
        setTotalPrice,
        eventDetails,
        setEventDetails,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};