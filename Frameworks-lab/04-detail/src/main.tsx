import { createRoot } from 'react-dom/client';
import { App } from './app';
import './styles.css';
import { StrictMode } from 'react';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Can't find the element with ID 'root'");
}
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
