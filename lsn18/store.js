import {createStore, combineReducers, applyMiddleware} from 'redux';
import studentsReducer from './reducer/students';
import counterReducer from './reducer/counter';
import loggerMiddleware from './middlewares/logger';
import countUpdaterMiddleware from './middlewares/count_updater';
import storageMiddleware from './middlewares/storage';
export const Store = createStore(combineReducers({
	students: studentsReducer,
	counter: counterReducer
}),
	applyMiddleware(
		loggerMiddleware,
		countUpdaterMiddleware,
		storageMiddleware
	),
);
