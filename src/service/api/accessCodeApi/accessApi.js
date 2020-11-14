import { requestFactory } from '../../helpers/requestFactory';
import { BASE_API_URL } from '../../../config'; // api url from server

// every method returns promise
export const accessCodeApi = {
	getApiAccess() {
		const method = 'GET';
		return requestFactory(BASE_API_URL, method);
	},
};
