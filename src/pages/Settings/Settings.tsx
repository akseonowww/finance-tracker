import {
	Container,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
	Paper,
	Grid,
	Switch,
	ListItemAvatar,
	Avatar,
	IconButton,
} from '@mui/material';
import { blueGrey, red, grey } from '@mui/material/colors';
import { BsBoxArrowRight, BsChevronRight } from 'react-icons/bs';
import Footer from '../../layout/Footer/Footer';
import avatar from '../../assets/avatar.jpg';

const Setting = ({ title = true }) => {
	return (
		<Container
			sx={{
				background: '#E4E8EB',
				minHeight: '100vh',
				p: '0 0 0 0',
				// borderRadius: '22px 22px 0 0',
			}}
		>
			{title && (
				<Typography variant="headline" sx={{ p: '16px' }}>
					Настройки
				</Typography>
			)}
			<Grid container direction="column" gap="6px">
				{/* Account */}
				<Grid item>
					<Paper variant="min" sx={{ p: '8px' }}>
						<List>
							<ListItem>
								<ListItemAvatar>
									<Avatar
										sx={{ height: '72px', width: '72px', marginRight: '16px' }}
										alt="Danila Kashen"
										src={avatar}
									>
										DK
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={
										<Typography
											variant="title"
											sx={{
												color: grey[900],
												textTransform: 'none',
												marginBottom: '4px',
											}}
										>
											Данила Кашин
										</Typography>
									}
									secondary={
										<Typography
											variant="body"
											sx={{ color: grey[900], textTransform: 'none' }}
										>
											Google Аккаунт
										</Typography>
									}
								/>
								<IconButton sx={{ marginRight: '-8px' }}>
									<BsBoxArrowRight size={'24px'} color={blueGrey[400]} />
								</IconButton>
							</ListItem>
						</List>
					</Paper>
				</Grid>

				{/* General */}
				<Grid item>
					<Paper variant="min">
						<Typography variant="title" sx={{ m: '0 16px' }}>
							Основное
						</Typography>
						<ListItem disablePadding>
							<ListItemButton
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<ListItemText
									sx={{ flex: 'none' }}
									primary={<Typography variant="body">Тема</Typography>}
								/>
								<ListItemText
									sx={{ flex: 'none' }}
									primary={
										<Typography variant="footnote" color={blueGrey[400]}>
											Авто
										</Typography>
									}
								/>
							</ListItemButton>
						</ListItem>
						<Divider variant="middle" />

						<ListItem disablePadding>
							<ListItemButton
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<ListItemText
									sx={{ flex: 'none' }}
									primary={<Typography variant="body">Язык</Typography>}
								/>
								<ListItemText
									sx={{ flex: 'none' }}
									primary={
										<Typography variant="footnote" color={blueGrey[400]}>
											Как в системе
										</Typography>
									}
								/>
							</ListItemButton>
						</ListItem>
					</Paper>
				</Grid>

				{/* Finance */}
				<Grid item>
					<Paper variant="min">
						<Typography variant="title" sx={{ m: '0 16px ' }}>
							Финансы
						</Typography>
						<List sx={{ p: 0 }}>
							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="body">Главная валюта</Typography>
										}
									/>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="footnote" color={blueGrey[400]}>
												Российский рубль, ₽
											</Typography>
										}
									/>
								</ListItemButton>
							</ListItem>
							<Divider variant="middle" />

							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="body">Вид чисел</Typography>
										}
									/>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="footnote" color={blueGrey[400]}>
												10 000,00 ₽
											</Typography>
										}
									/>
								</ListItemButton>
							</ListItem>
							<Divider variant="middle" />

							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="body">Скрывать баланс</Typography>
										}
									/>
									<Switch />
								</ListItemButton>
							</ListItem>
							<Divider variant="middle" />

							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={<Typography variant="body">Категории</Typography>}
									/>
									<BsChevronRight color={blueGrey[400]} />
								</ListItemButton>
							</ListItem>
							<Divider variant="middle" />

							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={<Typography variant="body">Лимиты</Typography>}
									/>
									<BsChevronRight color={blueGrey[400]} />
								</ListItemButton>
							</ListItem>
							<Divider variant="middle" />

							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="body">
												Экспортировать данные 
											</Typography>
										}
									/>
									<BsChevronRight color={blueGrey[400]} />
								</ListItemButton>
							</ListItem>
							<Divider variant="middle" />

							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="body">
												Импортировать данные
											</Typography>
										}
									/>
									<BsChevronRight color={blueGrey[400]} />
								</ListItemButton>
							</ListItem>
							<Divider variant="middle" />

							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none', color: red[400] }}
										primary={
											<Typography variant="bodyMedium">
												Очистить историю расходов
											</Typography>
										}
									/>
									<BsChevronRight color={blueGrey[400]} />
								</ListItemButton>
							</ListItem>
						</List>
					</Paper>
				</Grid>

				{/* Notifications */}
				<Grid item>
					<Paper variant="min">
						<Typography variant="title" sx={{ m: '0 16px ' }}>
							Уведомления
						</Typography>
						<List sx={{ p: 0 }}>
							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="body">Пуш уведомления</Typography>
										}
									/>
									<Switch />
								</ListItemButton>
							</ListItem>
							<Divider variant="middle" />

							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="body">Составлять отчёт</Typography>
										}
									/>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="footnote" color={blueGrey[400]}>
												каждый вечер
											</Typography>
										}
									/>
								</ListItemButton>
							</ListItem>
							<Divider variant="middle" />

							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="body">
												Напоминание 
											</Typography>
										}
									/>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="footnote" color={blueGrey[400]}>
												21:00
											</Typography>
										}
									/>
								</ListItemButton>
							</ListItem>
						</List>
					</Paper>
				</Grid>

				{/* Other */}
				<Grid item>
					<Paper variant="min">
						<Typography variant="title" sx={{ m: '0 16px ' }}>
							Другое
						</Typography>
						<List sx={{ p: 0 }}>
							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={<Typography variant="body">О нас</Typography>}
									/>
									<BsChevronRight color={blueGrey[400]} />
								</ListItemButton>
							</ListItem>
							<Divider variant="middle" />

							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="body">Вопрос/ответ</Typography>
										}
									/>
									<BsChevronRight color={blueGrey[400]} />
								</ListItemButton>
							</ListItem>
							<Divider variant="middle" />

							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="body">Телеграм канал</Typography>
										}
									/>
									<BsChevronRight color={blueGrey[400]} />
								</ListItemButton>
							</ListItem>
							<Divider variant="middle" />

							<ListItem disablePadding>
								<ListItemButton
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<ListItemText
										sx={{ flex: 'none', color: red[400] }}
										primary={
											<Typography variant="bodyMedium">Выйти</Typography>
										}
									/>
									<BsChevronRight color={blueGrey[400]} />
								</ListItemButton>
							</ListItem>
						</List>
					</Paper>
				</Grid>

				<Footer />
			</Grid>
		</Container>
	);
};

export default Setting;
