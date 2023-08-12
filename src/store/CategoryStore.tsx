import { makeAutoObservable } from 'mobx';
import { BsCupHot, BsLamp, BsUsbSymbol } from 'react-icons/bs';

export interface Category {
	id: number;
	title: string;
	name: string;
	icon: any;
	group: number;
}

class CategoryStore {
	categories: Category[] = [
		{
			id: 1,
			title: 'Еда вне дома',
			name: 'eating-out',
			icon: (size: number, color: any) => (
				<BsCupHot style={{ height: size, width: size, color: color }} />
			),
			group: 1,
		},
		{
			id: 2,
			title: 'Всё для дома',
			name: 'all-for-home',
			icon: (size: number, color: any) => (
				<BsLamp style={{ height: size, width: size, color: color }} />
			),
			group: 2,
		},
		{
			id: 3,
			title: 'Гаджеты',
			name: 'gadgets',
			icon: (size: number, color: any) => (
				<BsUsbSymbol style={{ height: size, width: size, color: color }} />
			),
			group: 3,
		},
	];

	constructor() {
		makeAutoObservable(this);
	}
}

const categoryStore = new CategoryStore();

export default categoryStore;
