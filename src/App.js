import './App.css';
import Testimonio from './componentes/Testimonio';
import { testimonios } from './data/testimonios-data';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros clientes sobre BBVA:</h1>
        {testimonios.map((data, index) => {
          return (
            <Testimonio
              key={index}
              nombre={data.nombre}
              pais={data.pais}
              imagen={data.imagen}
              cargo={data.cargo}
              empresa={data.empresa}
              testimonio={data.texto} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
