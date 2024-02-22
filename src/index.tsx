import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { themeFT } from './themeFT';
import { theme } from './theme/theme';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { CssBaseline } from '@mui/material';
// import StoreProvider from './context';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// Для Mobx (start)
if (
	!new (class {
		x: any;
	})().hasOwnProperty('x')
)
	throw new Error('Transpiler is not configured correctly');
// (end)

const themeApp = createTheme(theme);

root.render(
	<React.StrictMode>
		{/* <StoreProvider> */}
		<CssBaseline/>
		<ThemeProvider theme={themeApp}>
			<App />
		</ThemeProvider>
		{/* </StoreProvider> */}
	</React.StrictMode>
);
