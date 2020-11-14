import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { appPath } from '../../config';

// eslint-disable-next-line react/prop-types
export const ProtectedRoutes = ({ component: Component, ...routeProp }) => {
	const isThereAccess = useSelector((state) => state.accessReducer.access); // use selector to get value access from store for functional component

	return (
		<Route
			/* eslint-disable-next-line react/jsx-props-no-spreading */
			{...routeProp}
			/* eslint-disable-next-line react/jsx-props-no-spreading */
			render={(props) => (isThereAccess ? <Component {...props} /> : <Redirect to={appPath.betaAccessPage} />)}
		/>
	);
};
