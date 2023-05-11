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
import { currencyFormat } from '../../App';
import historyStore from '../../store/HistoryStore';
import { observer } from 'mobx-react-lite';

const History = observer(() => {
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
				{historyStore.expenses.map((el) => {
					return (
						<ListItem key={el.id} sx={{ p: 0, gap: '12px' }}>
							<ListItemIcon
								sx={{
									background: blue[100],
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
								<BsHeartHalf size="24px" color={blue[500]} />
							</ListItemIcon>
							<ListItemText
								primary={
									<Typography variant="bodyMedium" sx={{ display: 'block' }}>
										{el.category}
									</Typography>
								}
								secondary={
									<Typography variant="footnoteMedium" color={blueGrey[400]}>
										{currencyFormat(10000, 'ru')}
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
});

export default History;
