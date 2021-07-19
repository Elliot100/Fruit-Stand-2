import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
window.store = store;


const App = () => {
	return(
		<div>Hello World!</div>
	)
};



document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});
