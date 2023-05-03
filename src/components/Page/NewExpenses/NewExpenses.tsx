import {
	Container,
	FormControl,
	Grid,
	MenuItem,
	Select,
	Typography,
	TextField,
	Button,
	// TextareaAutosize,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const NewExpenses = () => {
	return (
		<Container sx={{ p: '12px 16px' }}>
			<Typography variant="headline" sx={{ marginBottom: '6px' }}>
				New expenses
			</Typography>
			<Grid container direction="column" gap="16px">
				<Grid item>
					<Typography variant="title" sx={{ marginBottom: '6px' }}>
						Category
					</Typography>
					<FormControl fullWidth={true}>
						<Select defaultValue="health">
							<MenuItem value="health">
								<Typography variant="body">Health</Typography>
							</MenuItem>
							<MenuItem value="clothes">
								<Typography variant="body">Clothes</Typography>
							</MenuItem>
							<MenuItem value="eating-out">
								<Typography variant="body">Eating out</Typography>
							</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item>
					<Typography variant="title" sx={{ marginBottom: '6px' }}>
						Date
					</Typography>
					<Typography variant="body">
						<TextField type="date" fullWidth />
						<LocalizationProvider dateAdapter={AdapterDayjs} fullWidth={true}>
							<DatePicker defaultValue={() => dayjs('2022-04-17')} />
						</LocalizationProvider>
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="title" sx={{ marginBottom: '6px' }}>
						Amount
					</Typography>
					<Typography variant="body">
						<TextField
							fullWidth={true}
							type="number"
							inputProps={{ step: 0 }}
							placeholder="0"
						/>
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant="title" sx={{ marginBottom: '6px' }}>
						Description
					</Typography>
					<Typography variant="body">
						<TextField
							type="text"
							fullWidth
							placeholder="I went to bus and readed and drats"
						/>
						{/* <TextareaAutosize
							minRows={3}
							placeholder="I went to bus and readed and drats"
						/> */}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				direction="column"
				gap={'6px'}
				sx={{ position: 'absolute', bottom: 0, right: 0, p: '8px 16px' }}
			>
				<Grid item>
					<Button variant="contained" fullWidth>
						Create an expenses
					</Button>
				</Grid>
				<Grid item>
					<Link to="/">
						<Button fullWidth sx={{ color: blue[400], textDecoration: 'auto' }}>
							Cancel
						</Button>
					</Link>
				</Grid>
			</Grid>
		</Container>
	);
};

export default NewExpenses;
