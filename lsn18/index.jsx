import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect, Prompt} from 'react-router-dom';
import {Store} from './store';
import ListConnected from './components/students_list'
	
	ReactDOM.render((
	<Provider store={Store}>
		<ListConnected/>
	</Provider>
	), document.getElementById('root'));