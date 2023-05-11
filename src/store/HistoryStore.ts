import { makeAutoObservable } from 'mobx';

export interface Expense {
	id: number;
	date?: any;
	cash: number;
	category: string;
	desc?: string;
}

class HistoryStore {
	expenses: Expense[] = [
		{
			id: 1,
			date: '20230704T120854',
			cash: 8000,
			category: 'Health',
		},
		{
			id: 2,
			cash: 8000,
			date: '20230704T120854',
			category: 'Health',
		},
		{
			id: 3,
			cash: 8000,
			date: '20230702T120854',
			category: 'Health',
		},
		{
			id: 4,
			cash: 8000,
			date: '20230704T120854',
			category: 'Health',
		},
		{
			id: 5,
			cash: 8000,
			date: '20230704T120854',
			category: 'Health',
		},
		{
			id: 6,
			cash: 8000,
			date: '20230702T120854',
			category: 'Health',
		},
	];

	constructor() {
		makeAutoObservable(this);
	}

	addExpenses(data: any) {
		this.expenses.push({
			id: this.expenses.length + 1,
			date: data.date,
			cash: data.cash,
			category: data.category,
			desc: data.desc,
		});
	}

	get getExpenses() {
		console.log(this.expenses);
		return this.expenses;
	}
}

const historyStore = new HistoryStore();

export default historyStore;
