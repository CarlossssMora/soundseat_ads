import React, { createContext, useState } from 'react';

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [eventDetails, setEventDetails] = useState(null);

    return (
        <TicketContext.Provider value={{
            selectedSeats,
            setSelectedSeats,
            totalPrice,
            setTotalPrice,
            eventDetails,
            setEventDetails,
        }}>
            {children}
        </TicketContext.Provider>
    );
};
