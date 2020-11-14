import React from 'react';
import { Link } from 'react-router-dom';
import { appPath } from '../../../config';
import { history } from '../../../reduxStore/store';
import { ConnectedRouter } from 'connected-react-router';

const HeaderComponent = () => (
	<div className="row">
		<header className="header">
			<nav className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-2">
				<ul>
					<ConnectedRouter history={history}>
						<Link to={appPath.homePage} className="pr-2">
							Home
						</Link>
						<Link to={appPath.aboutPage}>About us</Link>
					</ConnectedRouter>
				</ul>
			</nav>
		</header>
	</div>
);

export default HeaderComponent;
