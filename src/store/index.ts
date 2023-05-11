import { createContext, useContext } from 'react';
import historyStore from './HistoryStore';

const store = {
	historyStore: historyStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
	return useContext<typeof store>(StoreContext);
};

export default store;
