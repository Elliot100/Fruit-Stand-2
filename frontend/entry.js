import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {addApple, addOrange, clear} from './actions';
import { Provider } from 'react-redux';
import FruitStandContainer from './components/fruit_stand_container';

window.store = store;
// testing only
window.addApple = addApple;
window.addOrange = addOrange;
window.clear = clear;

const App = () => (
	<Provider store = {store}>
		<FruitStandContainer/>
	</Provider>
);



document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});
