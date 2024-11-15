import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000', // Cambia el puerto si tu servidor está en otro
});

export default api;