import { blue, green, orange } from '@mui/material/colors';
import { makeAutoObservable } from 'mobx';

export interface Group {
	id: number;
	title: string;
	name: string;
	color: any;
}

class GroupStore {
	groups: Group[] = [
		{
			id: 1,
			title: 'Everyday',
			name: 'everyday',
			color: blue[400],
		},
		{
			id: 2,
			title: 'Apartment',
			name: 'apartment',
			color: green[400],
		},
		{
			id: 3,
			title: 'Large',
			name: 'large',
			color: orange[400],
		},
	];

	constructor() {
		makeAutoObservable(this);
	}
}

const groupStore = new GroupStore();

export default groupStore;
