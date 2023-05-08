import {
	Container,
	FormControl,
	Grid,
	MenuItem,
	Select,
	Typography,
	TextField,
	Button,
	Chip,
	TextareaAutosize,
	Alert,
	AlertTitle,
	Collapse,
	Snackbar,
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
import { BsHeartHalf } from 'react-icons/bs';

const NewExpenses = () => {
	const [cash, setCash] = useState(0);
	const [category, setCategory] = useState('health');
	const [date, setDate] = useState(dayjs(new Date()));
	const [desc, setDesc] = useState('');
	const [openAlert, setOpenAlert] = useState(false);

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
					<Select
						onChange={(el: any) => setCategory(el.target.value)}
						value={category}
						fullWidth={true}
					>
						<MenuItem value="health">
							{/* <BsHeartHalf /> */}
							<Typography
								variant="body"
								sx={{ margin: '0 0 0 8px', width: '100%' }}
							>
								Health
							</Typography>
						</MenuItem>
						<MenuItem value="clothes">
							{/* <BsHeartHalf /> */}
							<Typography
								variant="body"
								sx={{ margin: '0 0 0 8px', width: '100%' }}
							>
								Clothes
							</Typography>
						</MenuItem>
						<MenuItem value="eating-out">
							{/* <BsHeartHalf /> */}
							<Typography
								variant="body"
								sx={{ margin: '0 0 0 8px', width: '100%' }}
							>
								Eating out
							</Typography>
						</MenuItem>
					</Select>
				</Grid>

				{/* Date */}
				<Grid item>
					<Typography variant="title" sx={{ marginBottom: '6px' }}>
						Date
					</Typography>
					<Typography variant="body">
						<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
							<MobileDatePicker
								sx={{
									width: '100%',
								}}
								value={date}
								onChange={(el: any) => setDate(el)}
								defaultValue={dayjs('2022-04-17')}
								views={['day', 'month', 'year']}
								format="D MMMM YYYY"
								maxDate={dayjs(new Date())}
							/>
						</LocalizationProvider>
					</Typography>
				</Grid>

				{/* Cash */}
				<Grid item>
					<Typography variant="title" sx={{ marginBottom: '6px' }}>
						Cash
					</Typography>
					<Typography variant="body">
						<NumericFormat
							fullWidth={true}
							onValueChange={(el: any) => setCash(el.value)}
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
							onChange={(el: any) => setDesc(el.target.value)}
							rows={3}
							multiline
							fullWidth
							placeholder="I went to bus and readed and drats"
						/>
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
				{/* Alert */}
				<Collapse in={openAlert}>
					<Alert severity="success">
						<AlertTitle>
							<Typography variant="title">
								{category} ({cash})
							</Typography>
						</AlertTitle>
						<Typography variant="body">
							{desc + ' '}
							{date.format('DD.MM.YYYY')}
						</Typography>
					</Alert>
				</Collapse>
				<Grid item>
					<Button
						variant="contained"
						fullWidth
						onClick={() => setOpenAlert(true)}
						// onClick={() =>
						// 	console.table([
						// 		{
						// 			Date: date.format('DD.MM.YYYY'),
						// 			Category: category,
						// 			Cash: cash,
						// 			Desc: desc,
						// 		},
						// 	])
						// }
					>
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
