import * as React from 'react';
import {
	Button,
	Typography,
	IconButton,
	Avatar,
	AppBar,
	Badge,
	Box,
	SwipeableDrawer,
} from '@mui/material';
import { BsBell, BsSearch } from 'react-icons/bs';
import { blueGrey, grey } from '@mui/material/colors';
import Setting from '../../pages/Settings/Settings';
import avatar from '../../assets/avatar.jpg';

const Header = () => {
	const [openSetting, setOpenSetting] = React.useState(false);
	const [closeExpenses, setCloseExpenses] = React.useState(false);

	return (
		<>
			<AppBar
				color="transparent"
				position="relative"
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					p: '12px 16px 0',
					boxShadow: 'none',
				}}
			>
				<Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'left',
							gap: '2px',
						}}
					>
						<Button
							sx={{
								p: '1px 12px 1px 1px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'left',
								gap: '8px',
								borderRadius: '100px',
							}}
							onClick={() => setOpenSetting(!openSetting)}
						>
							<Avatar alt="Danila Kashen" src={avatar}>
								DK
							</Avatar>
							<Typography
								variant="bodyMedium"
								sx={{ color: grey[900], textTransform: 'none' }}
							>
								Danila Kashen
							</Typography>
						</Button>

						<Button
							onClick={() => setCloseExpenses(false)}
							sx={{
								display: closeExpenses ? 'inline-block' : 'none',
								color: 'black',
								borderRadius: '100px',
								p: '0',
								m: '0 0 0 -6px',
							}}
						>
							<Typography variant="footnote" color={blueGrey[600]}>
								123 ₽ (today)
							</Typography>
						</Button>
					</Box>
					<SwipeableDrawer
						anchor="bottom"
						open={openSetting}
						onOpen={() => setOpenSetting(!openSetting)}
						onClose={() => setOpenSetting(!openSetting)}
					>
						<Setting title={false} />
					</SwipeableDrawer>
				</Box>
				<Box>
					<IconButton>
						<BsSearch />
					</IconButton>
					<IconButton>
						<Badge badgeContent={2} color="primary" variant="dot">
							<BsBell />
						</Badge>
					</IconButton>
				</Box>
			</AppBar>
			<Button
				onClick={() => setCloseExpenses(true)}
				sx={{
					display: closeExpenses ? 'none' : 'flex',
					justifyItems: 'center',
					flexDirection: 'column',
					textAlign: 'center',
					gap: '-2px',
					color: 'black',
					p: '6px 12px',
					m: '0 auto',
				}}
			>
				<Typography variant="headline">123 ₽</Typography>
				<Typography variant="body" color={blueGrey[600]}>
					expenses today
				</Typography>
			</Button>
		</>
	);
};

export default Header;
