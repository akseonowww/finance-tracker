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
					Версия 30.08.2023 (лето 2023)
				</Typography>
				{/* <Typography variant="body">
					<Link href="https://akseonowww.bio.link/">
						akseonowww (соц-сети и другие проекты)
					</Link>
				</Typography> */}
			</Box>
		</footer>
	);
};

export default Footer;
