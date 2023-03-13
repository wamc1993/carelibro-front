const LOCAL_STORAGE_NAME = "carelibro.store";

export const getInitialState = (initialState: any): any => {
	let serializedState = localStorage.getItem(LOCAL_STORAGE_NAME);

	if (!serializedState) {
		return initialState;
	}

	return JSON.parse(serializedState);
};

export const saveState = (state: any): void => {
	try {
		let serializedState = JSON.stringify(state);
		localStorage.setItem(LOCAL_STORAGE_NAME, serializedState);
	} catch (err) {}
};

export const clearState = () => {
	localStorage.removeItem(LOCAL_STORAGE_NAME);
};
