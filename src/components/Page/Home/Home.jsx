import { Box, Container, SpeedDial, Typography } from '@mui/material';
import Header from '../../Header/Header';
import Statistic from '../../Statistic/Statistic';
import History from '../../History/History';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Container
			disableGutters
			sx={{ background: '#E4E8EB', minHeight: '100vh' }}
		>
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
			<Link to="/new">
				<SpeedDial
					ariaLabel="Create new expenses"
					sx={{ position: 'fixed', bottom: 32, right: 16 }}
					icon={<BsPlus size={52} />}
				/>
			</Link>
		</Container>
	);
};

export default Home;
