import React from 'react';
import {
	Box,
	Button,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import { blue, blueGrey, green, grey, orange } from '@mui/material/colors';
import { BsFolder } from 'react-icons/bs';
import { currencyFormat } from '../../Functions';

const Statistic = () => {
	const data: any = [
		{
			name: 'Large',
			cash: 30000,
			color: orange,
			precent: 0,
		},
		{
			name: 'Apartment',
			cash: 25000,
			color: green,
			precent: 0,
		},
		{
			name: 'Everyday',
			cash: 45000,
			color: blue,
			precent: 0,
		},
	];
	let dataash: number = 0;

	data.map((el: any) => {
		return dataash += el.cash;
	});
	data.map((el: any) => {
		return el.precent = Math.floor(el.cash / (dataash / 100));
	});

	const miniChart = (arr: any) => {
		return (
			<Grid
				container
				sx={{
					minWidth: '100%',
					margin: 0,
					borderRadius: '100px',
					overflow: 'hidden',
					m: '8px 0 4px',
				}}
			>
				{arr.map((el: any, index: any) => {
					return (
						<Grid
							item
							key={index}
							width={`${el.precent}%`}
							height={'20px'}
							sx={{ background: el.color[400] }}
						/>
					);
				})}
			</Grid>
		);
	};

	return (
		<Paper
			className="Statistic"
			variant="big"
			elevation={4}
			sx={{ p: '16px 18px 8px', m: '16px' }}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Typography variant="headlineMini">Statistic</Typography>
				<Typography variant="footnote" color={blueGrey[400]}>
					first week of July
				</Typography>
			</Box>
			{miniChart(data)}
			<List>
				{data.map((el: any, index: any) => (
					<ListItem key={index} sx={{ p: '4px 0' }}>
						<ListItemIcon sx={{ marginRight: '12px' }}>
							<Stack
								spacing={6}
								direction="row"
								justifyContent="space-between"
								alignItems="center"
								sx={{
									background: el.color[100],
									boxSizing: 'border-box',
									width: 70,
									height: 28,
									borderRadius: '8px',
									overflow: 'hidden',
									p: '0 6px 0 0',
								}}
							>
								<Box
									sx={{
										justifyContent: 'center',
										alignItems: 'center',
										display: 'flex',
										minWidth: '28px',
										height: '28px',
										borderRadius: '8px',
										background: el.color[400],
									}}
								>
									<BsFolder color={grey[50]} />
								</Box>
								<Typography
									variant="footnoteMedium"
									sx={{ color: el.color[700] }}
								>
									{el.precent}%
								</Typography>
							</Stack>
						</ListItemIcon>
						<ListItemText>
							<Typography variant="body">{el.name}</Typography>
						</ListItemText>
						<Typography variant="bodyMedium">
							{currencyFormat(el.cash, 'ru')}
						</Typography>
					</ListItem>
				))}
			</List>
			<Button fullWidth>Open</Button>
		</Paper>
	);
};

export default Statistic;
