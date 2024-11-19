import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../stylesheets/nav.css';
import '../stylesheets/datepicker.css';

function Nav({ onSearch }) {
const [selectedDate, setSelectedDate] = useState(null);
const [searchText, setSearchText] = useState('');

const handleSearch = () => {
    onSearch({ date: selectedDate, text: searchText });
};

return (
    <nav className="nav">
        <div className="nav-logo">
            <Link to="/">
            <img src="/logo_sounbeat.png" alt="Logo" />
            </Link>
        </div>

        {/* Barra de búsqueda */}
        <div className="nav-search">
            {/* Filtro de fechas */}
            <div className="nav-filter">
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                placeholderText="Selecciona una fecha"
                dateFormat="dd/MM/yyyy"
                className="nav-datepicker"
                calendarClassName="custom-calendar"
            />
            </div>

            {/* Barra de búsqueda por texto */}
            <input
            type="text"
            placeholder="Buscar por artista o evento"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="nav-input"
            />

            {/* Botón de búsqueda */}
            <button className="nav-search-btn" onClick={handleSearch}>
            Buscar
            </button>
        </div>
    </nav>
);
}

export default Nav;
