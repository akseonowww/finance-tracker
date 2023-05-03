import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Setting from './components/Page/Settings/Settings';
import NewExpenses from './components/Page/NewExpenses/NewExpenses';
import Home from './components/Page/Home/Home';

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
