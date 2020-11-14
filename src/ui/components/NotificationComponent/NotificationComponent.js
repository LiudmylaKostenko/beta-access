import React from 'react';

// eslint-disable-next-line react/prop-types
const NotificationComponent = ({ message }) => (
	<div className="row">
		<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-2 d-flex justify-content-center">
			<p className="text-danger">{message}</p>
		</div>
	</div>
);

export default NotificationComponent;
