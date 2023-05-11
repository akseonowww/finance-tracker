import { Box, Grid, Link, Typography } from '@mui/material';
import logo from '../../assets/logo_24x24.svg';

const Footer = () => {
	return (
		<footer>
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
					<img src={logo} alt="Logo" height={'24px'} width="24px" />
					<Typography variant="bodyBold">Finance Tracker </Typography>
				</Grid>
				<Typography variant="body" marginBottom="16px">
					Version 1.4.2 (summer 2023)
				</Typography>
				<Typography variant="body">
					<Link href="https://akseonowww.bio.link/">
						Akseonowww Dev. (social networks)
					</Link>
				</Typography>
			</Box>
		</footer>
	);
};

export default Footer;
