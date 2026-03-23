import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import type { ReactNode } from 'react';

export const DarkThemeProvider = ({ children }: { children: ReactNode }) => {
	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#ffb7b2',
			},
			secondary: {
				main: '#9bf6ff',
			},
			background: {
				default: '#121418',
				paper: '#1e2128',
			},
			text: {
				primary: '#fdfdfd',
				secondary: '#a0aab2',
			},
		},
		shape: {
			borderRadius: 16,
		},
		typography: {
			fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
			button: {
				textTransform: 'none',
				fontWeight: 600,
			},
		},
		components: {
			MuiCard: {
				styleOverrides: {
					root: {
						backgroundImage: 'none',
						boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
					},
				},
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						backgroundColor: '#121418',
						backgroundImage: 'none',
						boxShadow: 'none',
						borderBottom: '1px solid #1e2128',
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
