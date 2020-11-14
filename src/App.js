import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { appPath } from './config';
import { history } from './reduxStore/store';
import { ConnectedRouter } from 'connected-react-router';
import { PublicRoutes } from './ui/routes/PublicRoutes';
import { ProtectedRoutes } from './ui/routes/ProtectedRoutes';
import BetaAccessPage from './ui/components/BetaAccessPageComponent/BetaAccessPageComponent';
import HomePage from './ui/components/HomePageComponent/HomePageComponent';
import AboutPage from './ui/components/AboutPageComponent/AboutPageComponent';
import Notification from './ui/components/NotificationComponent/NotificationComponent';
import Spinner from './ui/components/Spinner/Spinner';
import Header from './ui/common/Header/HeaderComponent';

const App = () => {
	// use selector to get value access, checkloader, error from store for functional component
	const isChecking = useSelector((state) => state.accessReducer.isChecking);
	const error = useSelector((state) => state.accessReducer.error);
	const isThereAccess = useSelector((state) => state.accessReducer.access);

	return (
		<>
			<ConnectedRouter history={history}>
				{isThereAccess ? <Header /> : null}
				<Switch>
					<PublicRoutes path={appPath.betaAccessPage} exact restricted component={BetaAccessPage} />
					<ProtectedRoutes path={appPath.homePage} exact component={HomePage} />
					<ProtectedRoutes path={appPath.aboutPage} exact component={AboutPage} />
					<Redirect to={appPath.homePage} />
				</Switch>
			</ConnectedRouter>
			{isChecking ? <Spinner /> : null}
			{!isChecking && error && <Notification message={error} />}
		</>
	);
};

export default App;
