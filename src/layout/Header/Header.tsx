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
import Setting from '../../pages/Settings/Settings';
import avatar from '../../assets/avatar.jpg';
import { styled } from '@mui/material/styles';
import MainExpense from './MainExpense/MainExpense';
import { grey } from '../../colors';

const Puller = styled(Box)(({ theme }) => ({
	width: 120,
	height: 4,
	backgroundColor: '#B5C0C9',
	borderRadius: 100,
	m: '0 auto',
}));

const Header = () => {
	const [openSetting, setOpenSetting] = React.useState(false);

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
				{/* Аккаунт (меню) */}
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
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'left',
								gap: '8px',
								borderRadius: '100px',
							}}

							onClick={() => setOpenSetting(!openSetting)}
						>
							<Avatar sx={{height: '36px', width: '36px'}} alt="Danila Kashen" src={avatar}>
								DK
							</Avatar>
							<Typography
								variant="bodyMedium"
								sx={{ color: grey[900], textTransform: 'none' }}
							>
								Данила Кашин
							</Typography>
						</Button>
					</Box>
				</Box>

				{/* Поиск и Уведомления */}
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
			<MainExpense/>
			{/* Выпадающее меню настроек */}
			<SwipeableDrawer
				anchor="bottom"
				hysteresis={1}
				open={openSetting}
				onOpen={() => setOpenSetting(true)}
				onClose={() => setOpenSetting(false)}
				SwipeAreaProps={<Button>123</Button>}
			>
				<Box
					sx={{
						background: '#E4E8EB',
						display: 'flex',
						justifyContent: 'center',
						p: '44px 0 6px 0',
					}}
					onClick={() => setOpenSetting(false)}
				>
					<Puller />
				</Box>
				<Setting title={false} />
			</SwipeableDrawer>
		</>
	);
};

export default Header;
