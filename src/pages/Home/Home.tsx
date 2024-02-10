import { Box, Container, SpeedDial } from '@mui/material';
import Header from '../../layout/Header/Header';
import Statistic from '../../components/Statistic/Statistic';
import History from '../../components/History/History';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';
import { theme } from '../../theme';

const Home = () => {
	return (
		<Container
			disableGutters
			sx={{ background: theme.palette?.background?.default, minHeight: '100vh' }}
		>
			<Header />

			<Box>
				<Statistic />
				<History />
			</Box>

			<Link to="/new">
				<SpeedDial
					ariaLabel="Создать новую запись"
					sx={{ position: 'fixed', bottom: 32, right: 16 }}
					icon={<BsPlus size={52} />}
				/>
			</Link>
		</Container>
	);
};

export default Home;
