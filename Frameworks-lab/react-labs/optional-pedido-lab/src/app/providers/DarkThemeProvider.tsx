import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';

const customDarkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			// Un tono cian/azulado vibrante que resalta muy bien en fondos oscuros
			main: '#26C6DA',
			contrastText: '#000000',
		},
		secondary: {
			main: '#ce93d8',
		},
		background: {
			default: '#121212', // Gris muy oscuro para el fondo general
			paper: '#1E1E1E', // Un gris ligeramente más claro para las tablas o tarjetas
		},
		text: {
			primary: '#E0E0E0', // Texto principal suave para no deslumbrar
			secondary: '#B0BEC5', // Texto secundario un poco más apagado
		},
	},
	// Opcional: Puedes personalizar el comportamiento de componentes específicos aquí
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none', // Evita que los botones estén todos en mayúsculas
					borderRadius: 8,
				},
			},
		},
	},
});

export const DarkThemeProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={customDarkTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
