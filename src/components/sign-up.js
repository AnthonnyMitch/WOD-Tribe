import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from 'mdbreact';
import './styles/sign-up.css';
import { response } from 'express';

class ClassicFormPage extends React.Component {
  state = {
    collapseID: ''
  };

  handleSubmit(event){
      event.preventDefault()
      console.log('sign-up-form, username');
      console.log(this.state.username);
    axios.post('/',{
        username: this.state.username,
        password: this.state.password
    })
    .then(response => {
        console.log(response)
        if(response.data){
            console.log('successful signup')
            this.setState({
                redirectTo: '/login'
            })
        } else{
            console.log('sign-up error');
        }
    }).catch(error =>{
        console.log('sign-up server error')
        console.log(error);
    })
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { collapseID } = this.state;
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('navbarCollapse')}
      />
    );
    return (
      <div id='classicformpage'>
        <Router>
          <div>
            <MDBNavbar
              dark
              expand='md'
              scrolling
              fixed='top'
              style={{ marginTop: '65px' }}
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className='white-text'>MDB</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse('navbarCollapse')}
                />
                <MDBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to='#!'>Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#!'>Link</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#!'>Profile</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className='md-form my-0'>
                          <input
                            className='form-control mr-sm-2'
                            type='text'
                            placeholder='Search'
                            aria-label='Search'
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapseID && overlay}
          </div>
        </Router>

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
                <h1 className='h1-responsive font-weight-bold'>
                  Sign up right now!
                </h1>
                <hr className='hr-light' />
                <h6 className='mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                  sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
                  quisquam iste, maiores. Nulla.
                </h6>
                <MDBBtn outline color='white'>
                  Learn More
                </MDBBtn>
              </MDBAnimation>

              <MDBCol md='6' xl='5' className='mb-4'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <MDBCard id='classic-card'>
                    <MDBCardBody className='white-text'>
                      <h3 className='text-center'>
                        <MDBIcon icon='user' /> Register:
                      </h3>
                      <hr className='hr-light' />
                      <MDBInput
                        className='white-text'
                        iconClass='white-text'
                        label='Your Username'
                        icon='user'
                        type= 'text'
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
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
                        name='password'
                        value={this.state.password}
                      />
                      <div className='text-center mt-4 black-text'>
                        <MDBBtn color='indigo'>Sign Up</MDBBtn>
                        <hr className='hr-light' />
                        <div className='text-center d-flex justify-content-center white-label'>
                          <a href='#!' className='p-2 m-2'>
                            <MDBIcon
                              fab
                              icon='twitter'
                              className='white-text'
                            />
                          </a>
                          <a href='#!' className='p-2 m-2'>
                            <MDBIcon
                              fab
                              icon='linkedin'
                              className='white-text'
                            />
                          </a>
                          <a href='#!' className='p-2 m-2'>
                            <MDBIcon
                              fab
                              icon='instagram'
                              className='white-text'
                            />
                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>

        <MDBContainer>
          <MDBRow className='py-5'>
            <MDBCol md='12' className='text-center'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ClassicFormPage;