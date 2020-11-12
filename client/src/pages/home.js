import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
  MDBAnimation
} from 'mdbreact';
import '../pages/home.css';

class Home extends React.Component {
  state = {
    collapseID: ''
  };

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
      <div id='home'>
        <Router>
          <div>
            <MDBNavbar
              dark
              expand='md'
              scrolling
              fixed='top'
          
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className='white-text'><MDBIcon fab icon="mandalorian" /></strong>
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
                      <MDBNavLink to='#!'>About</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#!'>Contact</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                    <MDBBtn color='green'>Login</MDBBtn>
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
                  WOD Tribe <MDBIcon fab icon="mandalorian" />
                </h1>
                <hr className='hr-light' />
                <h6 className='mb-4'>
                 Aqui vamos a poner el mission estatement del app y cuando le den click al button learn more los van a moder a un nivel de la paginadonde les explicares como funciona cada herramienta. 
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
                        label='Your name'
                        icon='user'
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
                      />
                      <div className='text-center mt-4 black-text'>
                        <MDBBtn color='green'>Sign Up</MDBBtn>
                    
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

export default Home;