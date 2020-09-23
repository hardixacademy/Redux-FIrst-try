import { INCREMENT, DECREMENT, CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from './types';

export function increment() {
	return { type: INCREMENT };
}

export function decrement() {
	return { type: DECREMENT };
}

export function enableButtons() {
	return { type: ENABLE_BUTTONS };
}

export function didableButtons() {
	return { type: DISABLE_BUTTONS };
}

export function asyncIncrement() {
	return function (dispatch) {
		dispatch(didableButtons());
		setTimeout(() => {
			dispatch(increment());
			dispatch(enableButtons());
		}, 1500);
	};
}

export function changeTheme(newTheme) {
	return { type: CHANGE_THEME, payload: newTheme };
}
