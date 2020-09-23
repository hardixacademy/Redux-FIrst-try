export function createStore(rootReduser, innitialState) {
	let state = rootReduser(innitialState, { type: '__INIT__' });
	const subscibers = [];

	return {
		dispatch(action) {
			state = rootReduser(state, action);
			subscibers.forEach((subCallback) => subCallback());
		}, //надо что то изменить
		subscribe(callback) {
			subscibers.push(callback);
		}, //надо что то поменять
		getState() {
			return state;
		},
	};
}
