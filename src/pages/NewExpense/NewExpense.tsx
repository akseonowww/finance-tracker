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
	Chip,
	Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { NumericFormat } from 'react-number-format';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import historyStore from '../../store/HistoryStore';
import categoryStore, { Category } from '../../store/CategoryStore';
import groupStore from '../../store/GroupStore';
import * as colors from '@mui/material/colors';
import { currencyFormat } from '../../App';

const NewExpense = observer(() => {
	const [cash, setCash] = useState(0);
	const [category, setCategory] = useState(1);
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
		<Container
			sx={{
				p: '12px 16px',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<Grid container direction="column" gap="16px" sx={{ height: '100%' }}>
				<Typography variant="headline">New expenses</Typography>
				{/* Category */}
				<Grid item>
					<Typography variant="title" sx={{ marginBottom: '6px' }}>
						Category
					</Typography>
					<Select
						// onChange={(el: any) => console.log(el)}
						onChange={(el: any) => setCategory(el.target.value)}
						value={category}
						fullWidth={true}
						required
					>
						{categoryStore.categories.map((el: Category) => {
							return (
								<MenuItem value={el.id} key={el.id}>
									<Box
										sx={{
											width: '100%',
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}
									>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												gap: '12px',
											}}
										>
											{el.icon(24, colors.blue[400])}
											<Typography variant="body">{el.title}</Typography>
										</Box>
										<Chip
											label={groupStore.groups[el.id - 1].title}
											sx={{
												color: colors.grey[50],
												background: groupStore.groups[el.id - 1].color,
												// colors[groupStore.groups[1].color as any][400],
												// colors[Object.keys(colors)[0] as any][400],
												// 	(key) => colors[key as keyof typeof colors]
												// colors[groupStore.groups[el.id - 1].color][400],
											}}
										/>
									</Box>
								</MenuItem>
							);
						})}
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
							type="tel"
						/>
						<input type="number" name="a" id="s" />
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
				// sx={{ p: '8px 16px' }}
			>
				{/* Alert */}
				<Collapse in={openAlert}>
					<Alert severity="success">
						<AlertTitle>
							<Typography variant="title">
								{categoryStore.categories[category - 1].title} (
								{currencyFormat(
									historyStore.expenses[historyStore.expenses.length - 1].cash,
									'ru'
								)}
								)
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
						<Button variant="text" fullWidth sx={{ color: colors.blue[400] }}>
							Cancel
						</Button>
					</Link>
				</Grid>
			</Grid>
		</Container>
	);
});

export default NewExpense;
