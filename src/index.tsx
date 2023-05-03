import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from './App';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeFT } from './ThemeFT';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const theme = createTheme(ThemeFT as any);

root.render(
	<React.StrictMode>
		{/* <Browser */}
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
