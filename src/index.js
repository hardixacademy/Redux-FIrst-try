import './styles.css';
import { applyMiddleware, createStore } from 'redux';
import { rootReduser } from './redux/rootReduser';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions';

const counter = document.getElementById('counter'),
	addBtn = document.getElementById('add'),
	subBtn = document.getElementById('sub'),
	asyncBtn = document.getElementById('async'),
	themeBtn = document.getElementById('theme');

const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk, logger)));

addBtn.addEventListener('click', () => store.dispatch(increment()));
subBtn.addEventListener('click', () => store.dispatch(decrement()));
asyncBtn.addEventListener('click', () => store.dispatch(asyncIncrement()));
themeBtn.addEventListener('click', () => {
	const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
	store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
	const state = store.getState();
	counter.textContent = state.counter;
	document.body.className = state.theme.value;

	[addBtn, subBtn, asyncBtn, themeBtn].forEach((btn) => (btn.disabled = state.theme.disabled));
});
store.dispatch({ type: 'INIT_APPLICATION' });
