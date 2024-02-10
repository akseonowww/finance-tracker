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
	Chip,
	Box,
	Snackbar,
	Slide,
	ListItemIcon,
	SlideProps,
} from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { NumericFormat } from 'react-number-format';
import historyStore from '../../store/HistoryStore';
import groupStore from '../../store/GroupStore';
import categoryStore, { Category } from '../../store/CategoryStore';
import { currencyFormat } from '../../App';
import { blue, blueGrey, grey } from '@mui/material/colors';
import { BsFolder } from 'react-icons/bs';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionDown(props: TransitionProps) {
	return <Slide {...props} direction="down" />;
}

const NewExpense = observer(() => {
	const [cash, setCash] = useState(1000);
	const [category, setCategory] = useState(1);
	const [date, setDate] = useState(dayjs(new Date()));
	const [desc, setDesc] = useState('');
	const [openAlert, setOpenAlert] = useState(false);

	const classes = {
		root: {
			'& .MuiOutlinedInput-input': {
				border: 0,
				borderRadius: 13,
				color: 'red',
				fontSize: 24,
			},
		},
	};

	const hundleSubmit = () => {
		if (cash > 0) {
			setOpenAlert(true);

			const data = { date, cash, category, desc };
			console.log(data);
			// submitHandler(data);

			historyStore.addExpenses(data);
		} else {
			console.log('Cash < 0!!!');
		}
	};

	return (
		<Container
		sx={{p: '12px 16px'}}>
			<Grid container direction="column" gap="16px" 
			// sx={{ height: '100%' }}
			>
				<Typography variant="headline">
					Новая запись
				</Typography>
				{/* Category */}
				<Grid item>
					<Typography variant="title" 
					sx={{ marginBottom: '6px' }}
					>
						Категория
					</Typography>
					<Select
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
											<ListItemIcon
												sx={{
													background: blue[100],
													height: '44px',
													width: '44px',
													minWidth: 'auto',
													boxSizing: 'border-box',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
													borderRadius: '100px',
												}}
											>
												{el.icon(24, blue[400])}
											</ListItemIcon>
											<Typography variant="body">{el.title}</Typography>
										</Box>
										<Chip
											label={
												<Box
													sx={{
														display: 'flex',
														justifyContent: 'center',
														alignItems: 'center',
														gap: '6px',
														height: '28px',
													}}
												>
													<BsFolder height={'16px'} width={'16px'} />
													<Typography variant="captionMedium">
														{groupStore.groups[el.id - 1].title}
													</Typography>
												</Box>
											}
											sx={{
												color: grey[50],
												background: groupStore.groups[el.id - 1].color,
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
						Дата
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
									backgroundColor: '#E4E8EB',
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
						Сумма
					</Typography>
					<Typography variant="body">
						<NumericFormat
							// sx={{
							// 	width: '100%',
							// 	backgroundColor: '#E4E8EB',
							// }}
							required
							value={cash || null}
							type="tel"
							customInput={TextField}
							placeholder="0 ₽"
							suffix={' ₽'}
							onValueChange={(el: any) => setCash(el.floatValue)}
							allowNegative={false}
							decimalScale={0}
							thousandsGroupStyle="thousand"
							thousandSeparator=" "
							fullWidth={true}
						/>
					</Typography>
				</Grid>

				{/* Description */}
				<Grid item>
					<Typography variant="title" sx={{ marginBottom: '6px' }}>
						Описание
					</Typography>
					<Typography variant="body">
						<TextField
							sx={{ p: '0' }}
							// inputProps={{
							// 	sx: {
							// 		// width: '100%',
							// 		backgroundColor: '#E4E8EB',
							// 		border: '1px solid red',
							// 	},
							// }}
							FormHelperTextProps={{
								sx: {},
							}}
							type="text"
							onChange={(el: any) => setDesc(el.target.value)}
							rows={3}
							multiline
							fullWidth
							placeholder="Я сходил в кофешку..."
						/>
					</Typography>
				</Grid>
			</Grid>

			{/* Buttons */}
			<Grid container direction="column" gap={'6px'}>
				{/* Alert */}
				<Snackbar
					open={openAlert}
					autoHideDuration={10000}
					onClose={() => setOpenAlert(false)}
					TransitionComponent={TransitionDown}
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					sx={{ top: '8px' }}
				>
					<Alert
						severity="success"
						sx={{ width: '100%' }}
						onClose={() => setOpenAlert(false)}
					>
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
				</Snackbar>
					<Link to="/" style={{ textDecoration: 'none' }}>
				<Grid item>
					<Button variant="contained" fullWidth onClick={hundleSubmit}>
						Создать запись
					</Button>
				</Grid>
				<Grid item>
						<Button variant="text" fullWidth sx={{ color: blue[400] }}>
							Отмена
						</Button>
				</Grid>
					</Link>
			</Grid>
		</Container>
	);
});

export default NewExpense;
