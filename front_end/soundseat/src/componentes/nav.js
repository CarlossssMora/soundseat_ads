import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../stylesheets/nav.css';

function Nav() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <nav className="nav">
            {/* Logo */}
            <div className="nav-logo">
            <img src="/logo_sounbeat.png" alt="Logo" />
            </div>

            {/* Barra de búsqueda */}
            <div className="nav-search">
            {/* Filtro de fechas */}
            <div className="nav-filter">
                <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Selecciona una fecha"
                dateFormat="dd/MM/yyyy"
                className="nav-datepicker"
                />
            </div>

            {/* Barra de búsqueda */}
            <input
                type="text"
                placeholder="Buscar por artista o evento"
                className="nav-input"
            />

            {/* Botón de búsqueda */}
            <button className="nav-search-btn">
                Buscar
            </button>
            </div>
        </nav>
        );
    }

    export default Nav;
