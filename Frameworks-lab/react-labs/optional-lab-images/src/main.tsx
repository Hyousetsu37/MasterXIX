import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/index';

const container = document.getElementById('root');
if (!container) {
	throw new Error("Couldn't find the root element");
}

const rootElement = createRoot(container);

rootElement.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
