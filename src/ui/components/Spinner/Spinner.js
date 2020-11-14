import React from 'react';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const SpinnerComponent = () => (
	<div className="row">
		<div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 p-2 d-flex justify-content-center">
			<Spinner type="Circles" color="#00BFFF" height={40} width={60} />
		</div>
	</div>
);

export default SpinnerComponent;
