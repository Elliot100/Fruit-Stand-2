import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {addApple, addOrange, clear} from './actions';

window.store = store;
// testing only
window.addApple = addApple;
window.addOrange = addOrange;
window.clear = clear;


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
