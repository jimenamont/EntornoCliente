// StrictMode ayuda a detectar problemas durante el desarrollo.
import { StrictMode } from 'react';
// createRoot conecta React con un elemento real de la página (el DOM).
import { createRoot } from 'react-dom/client';
// App es el componente que describe la interfaz de este primer paso.
import App from './App.jsx';
// Importar el CSS aplica estos estilos a la página.
import './index.css';

// Buscamos el contenedor declarado en index.html y creamos una raíz de React.
const root = createRoot(document.getElementById('root')); // esto siempre es igual

// render muestra App dentro del contenedor. Las etiquetas con mayúscula
// representan componentes de React; las minúsculas representan elementos HTML.
root.render( //siempre igual
  <StrictMode>
    <App />
  </StrictMode>,
);
