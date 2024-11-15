import React from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div>
      <h1>SoundSeat - Gestión de Usuarios</h1>
      <CreateUser />
      <UserList />
    </div>
  );
}

export default App;
