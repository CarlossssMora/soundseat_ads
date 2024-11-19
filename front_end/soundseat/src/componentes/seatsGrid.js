import React from 'react';

const SeatsGrid = ({ seats, onSeatSelect, selectedSeats }) => {
  return (
    <div className="seats-grid">
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {row.map((seat) => {
            const isSelected = selectedSeats.some((s) => s.id === seat.id);
            const seatClass = seat.status === 'occupied'
              ? 'occupied'
              : isSelected
              ? 'selected'
              : 'available';

            return (
              <div
                key={seat.id}
                className={`seat ${seatClass}`}
                onClick={() => {
                  if (seat.status !== 'occupied') {
                    onSeatSelect(seat);
                  }
                }}
              >
                {seat.id}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatsGrid;
