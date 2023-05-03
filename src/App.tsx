import React from 'react';
import History from './components/History/History';
import Statistic from './components/Statistic/Statistic';
import Header from './components/Header/Header';
import {
	Box,
	Button,
	Container,
	SpeedDial,
	Stack,
	Typography,
} from '@mui/material';
import { BsPlus } from 'react-icons/bs';



const App = () => {
	return (
		<Container disableGutters className="App" sx={{background: '#E4E8EB'}}>
			<Header />
			<Box>
				<Box sx={{ textAlign: 'center', p: '0' }}>
					<Typography variant="headline">123 ₽</Typography>
					<Typography variant="body">expenses today</Typography>
				</Box>
				<Statistic />
				<History />
				{/* <Stack spacing={2} direction="row">
					<Button variant="text">Text</Button>
					<Button variant="contained">Contained</Button>
					<Button variant="outlined">Outlined</Button>
				</Stack> */}
			</Box>
			<SpeedDial
				ariaLabel="Create new expenses"
				sx={{ position: 'fixed', bottom: 32, right: 16 }}
				icon={<BsPlus size={52} />}
			></SpeedDial>
		</Container>
	);
};

export default App;
