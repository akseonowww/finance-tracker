export const currencyFormat = (num: number, format: 'ru' | 'en') => {
	switch (format) {
		case 'ru':
			return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' ₽';
		case 'en':
			return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
		default:
			return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}
};
