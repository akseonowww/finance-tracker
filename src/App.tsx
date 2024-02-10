import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Setting from './pages/Settings/Settings';
import NewExpenses from './pages/NewExpense/NewExpense';
import Home from './pages/Home/Home';
import StatisticPage from './pages/StatisticPage/StatisticPage';
import History from './components/History/History';
import dayjs from 'dayjs';

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
	dayjs.locale('ru')
	const advancedFormat = require('dayjs/plugin/advancedFormat')
	dayjs.extend(advancedFormat)
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new" element={<NewExpenses />} />
				<Route path="/setting" element={<Setting />} />
				<Route path="/history" element={<History />} />
				<Route path="/statistic" element={<StatisticPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
