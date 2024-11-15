import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Renderiza los componentes para ponerlos en el index.html
// Especificamente, en el div con id = "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

