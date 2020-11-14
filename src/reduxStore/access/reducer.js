import {
	GET_ALL_ACCESS_CODES,
	ACCESS_SUCCESS,
	ACCESS_FAILURE,
	REQUEST_ACCESS_START,
	REQUEST_ACCESS_SUCCESS,
	REQUEST_ACCESS_FAILURE,
} from './actionTypes';

const initialState = {
	error: null,
	code: null,
	access: false,
	isChecking: false,
};

export const accessReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_ACCESS_CODES:
			return {
				...state,
				codeAPI: action.payload, // api from server
			};

		case REQUEST_ACCESS_START:
			return { ...state, isChecking: true }; // start spinner while checking

		case REQUEST_ACCESS_SUCCESS:
			return { ...state, isChecking: false }; // stop spinner, check is pass

		case REQUEST_ACCESS_FAILURE:
			return { ...state, error: action.payload }; // return error message, check is not pass

		case ACCESS_SUCCESS:
			return { ...state, access: true, code: action.payload, error: null }; // return user code access success

		case ACCESS_FAILURE:
			return { ...state, error: action.payload, access: false }; // return error , user code access failure

		default:
			return state; // if case higher is unsuitable, default state
	}
};
