import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Stack,
	Typography,
} from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';
import { BsHeartHalf } from 'react-icons/bs';
import { currencyFormat } from '../../Functions';

const History = () => {
	const data = [
		{
			cash: 9000,
			data: '20230704T120854',
			category: { name: 'Health', limit: 10000, groups: 'Everyday' },
			icon: <BsHeartHalf />,
		},
		{
			cash: 9000,
			data: '20230704T120854',
			category: { name: 'Health', limit: 10000, groups: 'Everyday' },
			icon: <BsHeartHalf />,
		},
		{
			cash: 9000,
			data: '20230702T120854',
			category: { name: 'Health', limit: 0, groups: 'Everyday' },
			icon: <BsHeartHalf />,
		},
		{
			cash: 9000,
			data: '20230704T120854',
			category: { name: 'Health', limit: 10000, groups: 'Everyday' },
			icon: <BsHeartHalf />,
		},
		{
			cash: 9000,
			data: '20230704T120854',
			category: { name: 'Health', limit: 10000, groups: 'Everyday' },
			icon: <BsHeartHalf />,
		},
		{
			cash: 9000,
			data: '20230702T120854',
			category: { name: 'Health', limit: 0, groups: 'Everyday' },
			icon: <BsHeartHalf />,
		},
	];
	return (
		<Paper variant="big">
			<Stack
				direction={'row'}
				sx={{ alignItems: 'center', justifyContent: 'space-between' }}
			>
				<Typography variant="headlineMini" gutterBottom>
					History
				</Typography>
				<Typography variant="footnote" color={blueGrey[400]}>
					today, 1 July
				</Typography>
				<Typography variant="footnoteMedium" color={blueGrey[400]}>
					9 000 ₽
				</Typography>
			</Stack>
			<List sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
				{data.map((el, index) => {
					return (
						<ListItem key={index} sx={{ p: 0, gap: '12px' }}>
							<ListItemIcon
								sx={{
									background: blue[50],
									height: '44px',
									width: '44px',
									minWidth: 'auto',
									boxSizing: 'border-box',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									borderRadius: '100px',
								}}
							>
								<BsHeartHalf size="24px" color={blue[400]} />
							</ListItemIcon>
							<ListItemText
								primary={
									<Typography variant="bodyMedium">
										{el.category.name}
									</Typography>
								}
								secondary={
									<Typography variant="footnoteMedium" color={blueGrey[400]}>
										{el.category.limit
											? currencyFormat(el.category.limit, 'ru')
											: ' '}
									</Typography>
								}
							/>
							<Typography variant="bodyMedium">
								{currencyFormat(el.cash, 'ru')}
							</Typography>
						</ListItem>
					);
				})}
			</List>
		</Paper>
	);
};

export default History;