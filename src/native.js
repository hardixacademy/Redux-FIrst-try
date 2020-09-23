import './styles.css';

const counter = document.getElementById('counter'),
	addBtn = document.getElementById('add'),
	subBtn = document.getElementById('sub'),
	asyncBtn = document.getElementById('async'),
	themeBtn = document.getElementById('theme');

let state = 0;

function render() {
	counter.textContent = state.toString();
}

addBtn.onclick = () => (state++, render());
subBtn.onclick = () => (state--, render());
asyncBtn.onclick = () =>
	setTimeout(() => {
		state++;
		render();
	}, 2000);
themeBtn.onclick = () => document.body.classList.toggle('dark');

render();
