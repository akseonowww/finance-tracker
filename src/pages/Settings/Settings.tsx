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
				</Grid>

				<Footer />
			</Grid>
		</Container>
	);
};

export default Setting;
