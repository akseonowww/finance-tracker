import {
	Container,
	Grid,
	MenuItem,
	Select,
	Typography,
	TextField,
	Button,
	Alert,
	AlertTitle,
	Collapse,
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
import { observer } from 'mobx-react-lite';
import historyStore from '../../store/HistoryStore';

const NewExpense = observer(() => {
	const [cash, setCash] = useState(0);
	const [category, setCategory] = useState('health');
	const [date, setDate] = useState(dayjs(new Date()));
	const [desc, setDesc] = useState('');
	const [openAlert, setOpenAlert] = useState(false);

	const hundleSubmit = () => {
		setOpenAlert(true);
		const data = { date, cash, category, desc };
		historyStore.addExpenses(data);

		historyStore.expenses.map((el) => {
			return console.log(el.id, el.category, el.cash, el.desc);
		});
	};

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
						required
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
						<LocalizationProvider
							dateAdapter={AdapterDayjs}
							adapterLocale="ru"
							required
						>
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
							required
							fullWidth={true}
							onValueChange={(el: any) => setCash(el.floatValue)}
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
								{
									historyStore.expenses[historyStore.expenses.length - 1]
										.category
								}{' '}
								({historyStore.expenses[historyStore.expenses.length - 1].cash})
							</Typography>
						</AlertTitle>
						<Typography variant="body">
							{historyStore.expenses[historyStore.expenses.length - 1].desc +
								' '}
							{/* {historyStore.expenses[1].date.format('DD.MM.YYYY')} */}
						</Typography>
					</Alert>
				</Collapse>
				<Grid item>
					<Button variant="contained" fullWidth onClick={hundleSubmit}>
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
});

export default NewExpense;
