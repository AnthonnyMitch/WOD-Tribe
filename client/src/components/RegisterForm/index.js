import React, { useRef } from 'react'

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,

  MDBAnimation
  } from 'mdbreact';
  import '../RegisterForm/register.css'
// class RegisterForm extends React.Component {
function RegisterForm({ onRegister }) {
	// refs
	const formRef = useRef();
	const userNameRef = useRef();
	const passwordRef = useRef();

	return (
		<div id='home'>
			  <MDBView>
        <MDBMask className='d-flex justify-content-center align-items-center gradient' />
        <MDBContainer

style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
          className='mt-5  d-flex justify-content-center align-items-center'
        >
          <MDBRow>
            <MDBAnimation
              type='fadeInLeft'
              delay='.3s'
              className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'
            >
              <h2 className='h1-responsive font-weight-bold'>
              <MDBIcon fab icon="mandalorian" /> WOD Tribe 
              </h2>
              <hr className='hr-light' />
              <h6 className='mb-4'>
              Wod Tribe exists for one reason, and that is to constantly challenge and lead our members to achieve the highest level of sustainable fitness you can reach..
              </h6>
              
            </MDBAnimation>
            <MDBCol md='6' xl='5' className='mb-4'>
              <MDBAnimation type='fadeInRight' delay='.3s'>
			  <MDBCard title="Register a New User">
                  <MDBCardBody className='white-text'>
                    <h3 className='text-center'>
                      <MDBIcon icon='user' /> Register:
                    </h3>
                    <hr className='hr-light' />
					<form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return onRegister({
						username: userNameRef.current.value,
						password: passwordRef.current.value
					});
				}}
			>
				<div className="form-group">
					<input className="form-control" ref={userNameRef} type='text' name="username" placeholder='Enter Username' /><br />
					<input className="form-control" ref={passwordRef} type='password' name="password" placeholder='Password' /><br />
					<button className="btn btn btn-primary" type='submit'>Submit</button>
				</div>
			</form>
                  </MDBCardBody>
				  </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
	  </div>
	)
}


export default RegisterForm