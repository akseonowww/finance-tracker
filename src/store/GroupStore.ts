import { blue, green, orange } from '@mui/material/colors';
import { makeAutoObservable } from 'mobx';

export interface Group {
	id: number;
	title: string;
	name: string;
	color: string;
}

class GroupStore {
	groups: Group[] = [
		{
			id: 1,
			title: 'Everyday',
			name: 'everyday',
			color: 'blue',
		},
		{
			id: 2,
			title: 'Apartment',
			name: 'apartment',
			color: 'green',
		},
		{
			id: 3,
			title: 'Large',
			name: 'large',
			color: 'orange',
		},
	];

	constructor() {
		makeAutoObservable(this);
	}
}

const groupStore = new GroupStore();

export default groupStore;
