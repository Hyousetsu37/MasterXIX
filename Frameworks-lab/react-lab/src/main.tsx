import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MyApp from './app';
import './app/styles/global.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error(
    "Falla al buscar el elemento root, asegurate de que <div id='root'> exista en el index.html",
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
);
