export const data = {
	user: {
		name: 'Шурик',
		fullname: null,
		avatar: '/',
		auth_service: 'Google Аккаунт',
	},
	group: [
		{
			id: 1,
			name: 'Повседневные',
			color: 'blue',
		},
		{
			id: 2,
			name: 'Квартира',
			color: 'green',
		},
		{
			id: 3,
			name: 'Крупные',
			color: 'orange',
		},
	],
	category: [
		{
			id: 1,
			name: 'Еда вне дома',
			icon: 'BsCupHot',
			group: 1,
		},
		{
			id: 2,
			name: 'Всё для дома',
			icon: 'BsLamp',
			group: 2,
		},
		{
			id: 3,
			name: 'Гаджеты',
			icon: 'BsUsbSymbol',
			group: 3,
		},
	],
	history: [
		{
			category: 3,
			cash: 9000,
			description: '',
		},
		{
			category: 1,
			cash: 8000,
			description: 'Купил молоко',
		},
		{
			category: 2,
			cash: 10000,
			description: '',
		},
		{
			category: 1,
			cash: 7000,
			description: '',
		},
		{
			category: 3,
			cash: 900000,
			description: 'Приобрёл машину',
		},
	],
};
