import React, { useState } from 'react';
import api from '../api';

const CreateUser = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users', { nombre, email });
      console.log("Usuario creado:", response.data);
      setNombre('');
      setEmail('');
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  return (
    <div>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
};

export default CreateUser;
