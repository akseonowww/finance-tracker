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
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { NumericFormat } from 'react-number-format';
import { useState } from 'react';

const NewExpenses = () => {
	const [cash, setCash] = useState(0);
	const [date, setDate] = useState(dayjs(new Date()));
	console.log(date.format('D MMMM YYYY'));

	return (
		<Container sx={{ p: '12px 16px' }}>
			<Typography variant="headline" sx={{ marginBottom: '6px' }}>
				New expenses
			</Typography>

			<Grid container direction="column" gap="16px">
				{/* Category */}
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

				{/* Date */}
				<Grid item>
					<Typography variant="title" sx={{ marginBottom: '6px' }}>
						Date
					</Typography>
					<Typography variant="body">
						<LocalizationProvider
							dateAdapter={AdapterDayjs}
							adapterLocale="ru"
							sx={{ width: '100%' }}
						>
							<MobileDatePicker
								defaultValue={dayjs('2022-04-17')}
								views={['day', 'month', 'year']}
								sx={{ width: '100%' }}
								format="D MMMM YYYY"
							/>
						</LocalizationProvider>
					</Typography>
				</Grid>

				{/* Amount */}
				<Grid item>
					<Typography variant="title" sx={{ marginBottom: '6px' }}>
						Amount
					</Typography>
					<Typography variant="body">
						<NumericFormat
							fullWidth={true}
							// value={0}
							// onChange={(el: any) => setCash(el)}
							placeholder="0 ₽"
							customInput={TextField}
							allowNegative={false}
							decimalScale={0}
							thousandsGroupStyle="thousand"
							thousandSeparator=" "
							suffix={' ₽'}
						/>
					</Typography>
				</Grid>

				{/* Description */}
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

			{/* Buttons */}
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
					<Link to="/" style={{ textDecoration: 'none' }}>
						<Button variant="text" fullWidth sx={{ color: blue[400] }}>
							Cancel
						</Button>
					</Link>
				</Grid>
			</Grid>
		</Container>
	);
};

export default NewExpenses;