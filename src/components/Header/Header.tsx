import * as React from 'react';
import {
	Button,
	Typography,
	IconButton,
	Drawer,
	Avatar,
	AppBar,
	Badge,
	Box,
} from '@mui/material';
import { BsBell, BsSearch } from 'react-icons/bs';
import { grey } from '@mui/material/colors';
import Setting from '../Page/Settings/Settings';

type Anchor = 'bottom';

const Header = () => {
	const [state, setState] = React.useState({
		bottom: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	return (
		<AppBar
			color="transparent"
			position="relative"
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				p: '8px 16px',
				boxShadow: 'none',
			}}
		>
			<Box>
				<Button
					sx={{ p: '0 12px 0 0', borderRadius: '100px' }}
					onClick={toggleDrawer('bottom', true)}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'left',
							gap: '8px',
						}}
					>
						<Avatar
							alt="Danila Kashen"
							src="https://sun6-22.userapi.com/impg/5sbuUmceG008qGwxRs9T-2vBiWJcOPxgY0PbSA/XgvcbD5ivPM.jpg?size=1792x1792&quality=96&sign=87ff6c843cc1f0e0d9af27e4ebcb1ac5&type=album"
						>
							DK
						</Avatar>
						<Typography
							variant="bodyMedium"
							sx={{ color: grey[900], textTransform: 'none' }}
						>
							Danila Kashen
						</Typography>
					</Box>
				</Button>
				<Drawer
					anchor={'bottom'}
					open={state['bottom']}
					onClose={toggleDrawer('bottom', false)}
				>
					<Setting title={false} />
				</Drawer>
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
	);
};

export default Header;
