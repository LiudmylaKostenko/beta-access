import {
	ACCESS_FAILURE,
	ACCESS_SUCCESS,
	REQUEST_ACCESS_START,
	REQUEST_ACCESS_SUCCESS,
	REQUEST_ACCESS_FAILURE,
} from './actionTypes';
import { accessCodeApi } from '../../service/api/accessCodeApi/accessApi';

export const getAllAccessCodes = async () => {
	try {
		return await accessCodeApi.getApiAccess(); // imitation loading Api (access code) from server
	} catch (err) {
		throw new Error(err);
	}
};

export const accessRequestStart = {
	type: REQUEST_ACCESS_START, // action, request on check user code , start
};

export const accessRequestSuccess = {
	type: REQUEST_ACCESS_SUCCESS, // action, request on check user code , success
};

export const accessRequestFailure = (error) => ({
	type: REQUEST_ACCESS_FAILURE,
	payload: error, // action, request on check user code , failure
});

export const accessSuccess = (accessKey) => ({
	type: ACCESS_SUCCESS,
	payload: accessKey, // action, user code is pass
});
export const accessFailure = (error) => ({
	type: ACCESS_FAILURE,
	payload: error, // action, user code is not pass
});
