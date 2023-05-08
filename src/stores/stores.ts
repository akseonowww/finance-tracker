import { makeAutoObservable } from 'mobx';

interface Expense {
	cash: number;
	category: string;
}

class HistoryStore {
	expenses: Expense[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	addExpenses(data: any) {
		this.expenses.push({
			cash: data.cash,
			category: data.category,
		});
	}
}

const historyStore = new HistoryStore();

export default historyStore;
