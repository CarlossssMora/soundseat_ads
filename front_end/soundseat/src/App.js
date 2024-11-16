import './stylesheets/App.css';
import Nav from './componentes/nav';

function App() {
  return (
    //Dentro de este div se pone todo el código HTML
    // Para utilizar un componente hay que importarlo primero
    //  import Componente from 'direccion';
    // Para utilizarlo, se mete el componente dentro de div
    // <Componente />
    <div className="App">
      <Nav/>
    </div>
  );
}

export default App;
