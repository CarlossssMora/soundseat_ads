import React from 'react';

const Seat = ({ seat, isSelected, onClick }) => {
  const styles = {
    backgroundColor: seat.status === 'occupied' 
      ? 'gray' 
      : isSelected 
        ? 'green' 
        : 'white',
    border: '1px solid black',
    cursor: seat.status === 'occupied' ? 'not-allowed' : 'pointer',
    width: '30px',
    height: '30px',
    margin: '5px',
    textAlign: 'center',
    lineHeight: '30px',
  };

  return (
    <div style={styles} onClick={onClick}>
      {seat.id}
    </div>
  );
};

export default Seat;