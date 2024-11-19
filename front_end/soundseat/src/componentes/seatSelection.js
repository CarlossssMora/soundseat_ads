import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Section from './section';
import SeatsGrid from './seatsGrid';
import Summary from './summary';
import '../stylesheets/seatSelection.css';

const SeatSelection = ({ events }) => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState({});
  const [maxSeats, setMaxSeats] = useState(1);

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
          { ...seat, price: selectedSection.price },
        ];
      }

      return updatedSeats;
    });
  };

  const handleRemoveSeat = (seatId) => {
    setSelectedSeats((prevSeats) => {
      const updatedSeats = { ...prevSeats };

      Object.keys(updatedSeats).forEach((section) => {
        updatedSeats[section] = updatedSeats[section].filter((seat) => seat.id !== seatId);
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
