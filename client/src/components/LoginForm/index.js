import React, { useRef } from 'react'

import {
	MDBMask,
	
	MDBIcon,

	MDBView,
	MDBContainer,
	MDBCard,
	MDBCardBody,

	MDBAnimation
} from 'mdbreact';

import '../LoginForm/login.css';


function LoginForm({ onLogin }) {

	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<div id='classicformpage'>
			<MDBView>
				<MDBMask className='d-flex justify-content-center align-items-center gradient' />
				<MDBContainer
					style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
					className='mt-5  d-flex justify-content-center align-items-center'
				>
				

						<MDBAnimation type='fadeInRight' delay='.3s'>
							<MDBCard id='classic-card' className="card">
								<MDBCardBody className='white-text'>
									<h2 className='text-center'>


										WOD Tribe
						  </h2>
									<h3 className='text-center'>
										<MDBIcon fab icon="mandalorian" />Login:
						</h3>
									<hr className='hr-light' />
									
										<form
											ref={formRef}
											onSubmit={(e) => {
												e.preventDefault();
												return onLogin({
													username: userNameRef.current.value,
													password: passwordRef.current.value
												});
											}}
										>
											<div className="form-group">
												<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
												<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
												<button className="btn btn-success" type='submit'>
													Submit
						</button>
											</div>
										</form>
									
								</MDBCardBody>
							</MDBCard>
						</MDBAnimation>

				</MDBContainer>
			</MDBView>
		</div>
	);
}


export default LoginForm;