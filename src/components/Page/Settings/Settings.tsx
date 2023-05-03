import {
	Box,
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
import { blue, blueGrey, red, grey } from '@mui/material/colors';
import { BsBoxArrowRight, BsChevronRight, BsTelegram } from 'react-icons/bs';

const Setting = ({ title = true }) => {
	return (
		<Container sx={{ background: '#E4E8EB', minHeight: '100vh', p: 0 }}>
			{title && (
				<Typography variant="headline" sx={{ p: '16px' }}>
					Setting{' '}
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
										// sizes="72px"
										sx={{ height: '72px', width: '72px', marginRight: '16px' }}
										alt="Danila Kashen"
										src="https://sun6-22.userapi.com/impg/5sbuUmceG008qGwxRs9T-2vBiWJcOPxgY0PbSA/XgvcbD5ivPM.jpg?size=1792x1792&quality=96&sign=87ff6c843cc1f0e0d9af27e4ebcb1ac5&type=album"
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
											Danila Kashen
										</Typography>
									}
									secondary={
										<Typography
											variant="body"
											sx={{ color: grey[900], textTransform: 'none' }}
										>
											Google Account
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
							General
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
									primary={<Typography variant="body">Theme</Typography>}
								/>
								<ListItemText
									sx={{ flex: 'none' }}
									primary={
										<Typography variant="footnote" color={blueGrey[400]}>
											Auto
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
									primary={<Typography variant="body">Language</Typography>}
								/>
								<ListItemText
									sx={{ flex: 'none' }}
									primary={
										<Typography variant="footnote" color={blueGrey[400]}>
											Use system settings
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
							Finance
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
											<Typography variant="body">Main currency</Typography>
										}
									/>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="footnote" color={blueGrey[400]}>
												Russian ruble, ₽
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
											<Typography variant="body">Type of numbers</Typography>
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
											<Typography variant="body">Hide balance</Typography>
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
										primary={<Typography variant="body">Categories</Typography>}
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
										primary={<Typography variant="body">Limits</Typography>}
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
												Export transactions to CSV
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
												Import & Backup Data
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
												Clear expense history
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
							Notifications
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
											<Typography variant="body">Push notifications</Typography>
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
											<Typography variant="body">Send a report</Typography>
										}
									/>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="footnote" color={blueGrey[400]}>
												every night
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
												Remind you to introduce expenses
											</Typography>
										}
									/>
									<ListItemText
										sx={{ flex: 'none' }}
										primary={
											<Typography variant="footnote" color={blueGrey[400]}>
												at 21:00
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
							Other
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
										primary={<Typography variant="body">About</Typography>}
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
											<Typography variant="body">Ask a Question</Typography>
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
											<Typography variant="body">Telegram channel</Typography>
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
											<Typography variant="bodyMedium">Sign out</Typography>
										}
									/>
									<BsChevronRight color={blueGrey[400]} />
								</ListItemButton>
							</ListItem>
						</List>
					</Paper>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							p: '40px 0',
							gap: '8px',
						}}
					>
						<Grid display={'flex'} gap="6px" alignItems={'center'}>
							<BsTelegram size={'24px'} color={blue[400]} />
							<Typography variant="bodyBold">Finance Tracker </Typography>
						</Grid>
						<Typography variant="body">Version 1.4.2 (summer 2023)</Typography>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Setting;
