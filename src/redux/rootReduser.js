import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT, CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from './types';

function counterReduser(state = 0, action) {
	if (action.type === INCREMENT) {
		return state + 1;
	}

	if (action.type === DECREMENT) {
		return state - 1;
	}

	return state;
}

const initialThemeState = {
	value: 'light',
	disabled: false,
};

function themeReduser(state = initialThemeState, action) {
	switch (action.type) {
		case CHANGE_THEME:
			return { ...state, value: action.payload };

		case ENABLE_BUTTONS:
			return { ...state, disabled: false };
		case DISABLE_BUTTONS:
			return { ...state, disabled: true };
		default:
			return state;
	}

	return state;
}

export const rootReduser = combineReducers({
	counter: counterReduser,
	theme: themeReduser,
});
