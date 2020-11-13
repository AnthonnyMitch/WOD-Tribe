import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBMask,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from 'mdbreact';
import '../pages/login.css';

class Login extends React.Component {
  

  render() {
   
    return (
      <div id='classicformpage'>
        <MDBView>
          <MDBMask className='d-flex justify-content-center align-items-center gradient' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='mt-5  d-flex justify-content-center align-items-center'
          >
            <MDBRow>
           
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <MDBCard id='classic-card' className="card">
                    <MDBCardBody className='white-text'>
                        <h1 className='text-center'>
                       

                            WOD Tribe
                        </h1>
                      <h3 className='text-center'>
                      <MDBIcon fab icon="mandalorian" />Login:
                      </h3>
                      <hr className='hr-light' />
                      <MDBInput
                        className='white-text'
                        iconClass='white-text'
                        label='Your email'
                        icon='envelope'
                      />
                      <MDBInput
                        className='white-text'
                        iconClass='white-text'
                        label='Your password'
                        icon='lock'
                        type='password'
                      />
                      <div className='text-center mt-4 black-text'>
                        <MDBBtn color='green'><Link to="/userpage">Login</Link></MDBBtn>
                    
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
             
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default Login;