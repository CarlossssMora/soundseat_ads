import React from 'react';
import { useParams } from 'react-router-dom';

function BuyTickets() {
    const { id } = useParams(); // Obtener el id del evento
    return (
        <div className="buy-tickets-container">
            <h1>Comprar Boletos para el Evento {id}</h1>
            <p>Pronto podrás comprar boletos para el evento con ID: {id}.</p>
            {/* Aquí puedes agregar más detalles o formulario para la compra */}
        </div>
    );
}

export default BuyTickets;
