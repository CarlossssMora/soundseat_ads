import React from 'react';
import './stylesheets/App.css';
import Nav from './componentes/nav';
import Footer from './componentes/footer';

function App() {
  return (
    <div className="App">
      {/* Descomenta cada componente uno por uno para probar */}
      <Nav /> 
      <div className="main-content">
        {/*Aquí iría tu contenido principal*/}
      </div> 
      <Footer />
    </div>
  );
}

export default App;
