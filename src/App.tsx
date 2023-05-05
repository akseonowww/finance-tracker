import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Setting from './page/Settings/Settings';
import NewExpenses from './page/NewExpenses/NewExpenses';
import Home from './page/Home/Home';

export const currencyFormat = (num: number, format: 'ru' | 'en') => {
	switch (format) {
		case 'ru':
			return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽';
		case 'en':
			return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
		default:
			return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}
};

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new" element={<NewExpenses />} />
				<Route path="/setting" element={<Setting />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
