import React from 'react';

const Section = ({ section, onClick, isStatic }) => {
  return (
    <div
      className={`section section-${section.name.toLowerCase().replace(' ', '-')}`}
      onClick={!isStatic ? () => onClick(section) : null} // Solo permite clic si no es estático
      style={isStatic ? { cursor: 'default' } : {}} // Cambia el cursor si es estático
    >
      {section.name}
    </div>
  );
};

export default Section;
