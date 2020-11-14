import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserAccessKey } from '../../../service/helpers/checkUserAccess';

const BetaAccessPageComponent = () => {
	const [userCode, setUserCode] = useState(''); // hook for functional component, get/set value from input
	const dispatch = useDispatch();

	const onChangeHandler = ({ target: { value } }) => {
		setUserCode(value); // set user value code
	};

	const onCheckUserAccess = (e) => {
		e.preventDefault();
		dispatch(checkUserAccessKey(userCode)); // dispatch check access with user code from input
		setUserCode(''); // field cleaning
	};

	return (
		<div className="container p-2">
			<div className="row">
				<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-2 d-flex justify-content-center">
					<h1 className="text-secondary">Beta Access Page</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
					<h3 className="text-justify text-primary p-2">
						Sorry but site is not ready yet, it should be expected in the future...
					</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<h5 className="text-dark text-justify p-2">
						In order to have unlimited access to all pages of the site, please enter the code.
					</h5>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<h6 className="text-success text-justify p-2">Prompt: guest, animal2020, admin, test</h6>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<form name="form" onSubmit={onCheckUserAccess}>
						{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
						<div className="form-group d-flex p-1 ">
							{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
							<label htmlFor="accessCode" className="accessCode p-1 mr-2">
								code
							</label>
							<input
								type="text"
								className="form-control w-50 mr-2"
								name="accessCode"
								placeholder="enter your code..."
								value={userCode}
								onChange={onChangeHandler}
								autoFocus
							/>
							<button className="btn btn-secondary" type="submit">
								check your code
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BetaAccessPageComponent;
