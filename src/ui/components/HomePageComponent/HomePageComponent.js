import React from 'react';
import Logo from './animals.jpg';

const HomePageComponent = () => (
	<div className="container p-2">
		<div className="row">
			<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-2 ">
				<img className="img-fluid p-1" src={Logo} alt="logo" />
			</div>
		</div>
		<div className="row">
			<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<p className="text-danger p-1">
					Every day we rush to work, to school, to a meeting, on a date and do not notice the sad eyes, those
					who need help ...
				</p>
			</div>
		</div>
		<div className="row">
			<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<p className="text-danger p-1">
					Needs us ... Homeless, abandoned, crippled, there are so many of them, we understand that we cannot
					save everyone, but we can help many!
				</p>
			</div>
		</div>
	</div>
);

export default HomePageComponent;
