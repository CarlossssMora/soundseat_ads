import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Section from './section';
import SeatsGrid from './seatsGrid';
import Summary from './summary';
import axios from 'axios'; // Para realizar solicitudes HTTP
import '../stylesheets/seatSelection.css';

const SeatSelection = () => {
  const { id } = useParams(); // Obtener el ID del evento desde la URL
  const [event, setEvent] = useState(null); // Estado para almacenar los datos del evento
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState({});
  const [maxSeats, setMaxSeats] = useState(1);

  // Función para reestructurar los asientos en filas
  const restructureSeats = (seats, seatsPerRow = 2) => {
    const groupedSeats = [];
    for (let i = 0; i < seats.length; i += seatsPerRow) {
      groupedSeats.push(seats.slice(i, i + seatsPerRow));
    }
    return groupedSeats;
  };

  // Obtener datos del evento desde el backend
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/events/${id}`);
        const eventData = response.data;

        // Reestructurar los asientos para cada sección
        const restructuredSections = eventData.sections.map((section) => ({
          ...section,
          seats: restructureSeats(section.seats, 2), // Ajusta "2" al número de asientos por fila
        }));

        setEvent({ ...eventData, sections: restructuredSections });
        setLoading(false);
      } catch (err) {
        setError('No se pudo cargar la información del evento.');
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div className="loading">Cargando detalles del evento...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!event) {
    return <h2>Evento no encontrado</h2>;
  }

  const handleSectionClick = (section) => {
    if (section.name === 'Campo') return;
    setSelectedSection(section);
  };

  const handleSeatSelect = (seat) => {
    if (!selectedSection) {
      console.error('No hay una sección seleccionada.');
      return;
    }

    const totalSelectedSeats = Object.values(selectedSeats).flat().length;

    if (
      totalSelectedSeats >= maxSeats &&
      !Object.values(selectedSeats).flat().some((s) => s.id === seat.id)
    ) {
      alert(`Solo puedes seleccionar hasta ${maxSeats} asientos en total.`);
      return;
    }

    setSelectedSeats((prevSeats) => {
      const updatedSeats = { ...prevSeats };
      const currentSelectedSeats = prevSeats[selectedSection.name] || [];
      const alreadySelected = currentSelectedSeats.find((s) => s.id === seat.id);

      if (alreadySelected) {
        updatedSeats[selectedSection.name] = currentSelectedSeats.filter(
          (s) => s.id !== seat.id
        );
      } else {
        updatedSeats[selectedSection.name] = [
          ...currentSelectedSeats,
          { ...seat, price: selectedSection.price, sectionName: selectedSection.name },
        ];
      }

      return updatedSeats;
    });
  };

  const handleRemoveSeat = (seatId) => {
    setSelectedSeats((prevSeats) => {
      const updatedSeats = { ...prevSeats };

      Object.keys(updatedSeats).forEach((sectionName) => {
        updatedSeats[sectionName] = updatedSeats[sectionName].filter(
          (seat) => seat.id !== seatId
        );
      });

      Object.keys(updatedSeats).forEach((sectionName) => {
        if (updatedSeats[sectionName].length === 0) {
          delete updatedSeats[sectionName];
        }
      });

      return updatedSeats;
    });
  };

  const handleClearAllSeats = () => {
    setSelectedSeats({});
  };

  const total = Object.values(selectedSeats)
    .flat()
    .reduce((sum, seat) => sum + seat.price, 0);

  return (
    <div className="seat-selection-container">
      <div className="seat-selection-header">
        <h1>Selecciona tus asientos para {event.title}</h1>
        <h3>
          {event.artist} - {event.date} a las {event.time}
        </h3>
      </div>
      <header>
        <label>
          Número de asientos a seleccionar:
          <input
            type="number"
            min="1"
            max="20"
            value={maxSeats}
            onChange={(e) => setMaxSeats(Number(e.target.value))}
          />
        </label>
      </header>
      <div className="main-layout">
        {selectedSection ? (
          <div className="seats-container">
            <button
              onClick={() => setSelectedSection(null)}
              className="back-button"
            >
              Volver al estadio
            </button>
            <h2>
              {selectedSection.name} - ${selectedSection.price} por asiento
            </h2>
            <SeatsGrid
              seats={selectedSection.seats}
              price={selectedSection.price}
              onSeatSelect={handleSeatSelect}
              selectedSeats={selectedSeats[selectedSection.name] || []}
            />
            <div className="legend">
              <div className="legend-item">
                <span className="box available"></span> Disponible
              </div>
              <div className="legend-item">
                <span className="box occupied"></span> Ocupado
              </div>
              <div className="legend-item">
                <span className="box selected"></span> Seleccionado
              </div>
            </div>
          </div>
        ) : (
          <div className="stadium-layout">
            {event.sections.map((section) => (
              <Section
                key={section.name}
                section={section}
                onClick={() => handleSectionClick(section)}
              />
            ))}
          </div>
        )}
        <div className="summary">
          <Summary
            selectedSeats={Object.values(selectedSeats).flat()}
            total={total}
            onRemoveSeat={handleRemoveSeat}
            onClearSeats={handleClearAllSeats}
          />
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
