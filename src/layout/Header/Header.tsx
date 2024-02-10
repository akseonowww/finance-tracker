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
						<Box
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
						</Box>
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
			{/* Потраченая сумма */}
			<Box
				sx={{
					display: 'flex',
					justifyItems: 'center',
					flexDirection: 'column',
					textAlign: 'center',
					p: '6px 12px',
					m: '0 auto',
				}}
			>
				<Typography variant="headline" color={grey[900]}>123 ₽</Typography>
				<Typography variant="body" color={grey[600]}>
					расходы за сегодня
				</Typography>
			</Box>
		</>
	);
};

export default Header;
