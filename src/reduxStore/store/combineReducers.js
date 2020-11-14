import { accessReducer } from '../access/reducer';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export const rootReducer = (history) =>
	combineReducers({
		// combine reducer connects all reducer for work with store
		router: connectRouter(history),
		accessReducer,
	});
