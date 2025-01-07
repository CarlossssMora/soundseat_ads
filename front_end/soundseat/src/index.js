import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css'; // Si tienes un archivo global de estilos
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { TicketProvider } from './componentes/ticketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TicketProvider>
    <App />
    </TicketProvider>
  </React.StrictMode>
);

