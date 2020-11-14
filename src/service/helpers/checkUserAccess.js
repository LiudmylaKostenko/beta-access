import { GET_ALL_ACCESS_CODES } from '../../reduxStore/access/actionTypes';
import {
	accessFailure,
	accessRequestStart,
	accessRequestSuccess,
	accessSuccess,
	getAllAccessCodes,
	accessRequestFailure,
} from '../../reduxStore/access/actions';

export const checkUserAccessKey = (userCode) => (dispatch) => {
	dispatch(accessRequestStart); // dispatch starting request
	getAllAccessCodes()
		.then((resolve) => {
			dispatch({ type: GET_ALL_ACCESS_CODES, payload: resolve }); // dispatch to store dataApi from server
			// eslint-disable-next-line no-unused-expressions
			resolve.accessCodeKeys.includes(userCode) // if usercode find at dataApi
				? dispatch(accessSuccess(userCode)) // yes - dispatch user code to store
				: dispatch(accessFailure('Sorry, but your access key is wrong')); // no - dispatch error message
			setTimeout(() => dispatch(accessRequestSuccess), 1000); // dispatch check is stop
		})
		.catch((error) => {
			dispatch(accessRequestFailure(error)); // dispatch error request with message
		});
};
