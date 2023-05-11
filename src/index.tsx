import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import App from './App';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeFT } from './themeFT';
// import StoreProvider from './context';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

if (
	!new (class {
		x: any;
	})().hasOwnProperty('x')
)
	throw new Error('Transpiler is not configured correctly');

const theme = createTheme(themeFT as any);

root.render(
	<React.StrictMode>
		{/* <StoreProvider> */}
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
		{/* </StoreProvider> */}
	</React.StrictMode>
);
