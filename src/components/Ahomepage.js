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
    MDBFormInline,
    MDBBtn,
    MDBView,
    MDBContainer
} from 'mdbreact';
import './home.css';

class Home extends React.Component {
    state = {
        collapsed: false
    };

    handleTogglerClick = () => {
        const { collapsed } = this.state;

        this.setState({
            collapsed: !collapsed
        });
    };

    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }

    componentWillUnmount() {
        document.querySelector('nav').style.height = 'auto';
    }

    render() {
        const { collapsed } = this.state;
        const navStyle = { marginTop: '4rem' };
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <div id='Home'>
                <Router>
                    <div>
                        <MDBNavbar
                            color='primary-color'
                            style={navStyle}
                            dark
                            expand='md'
                            fixed='top'
                            scrolling
                            transparent
                        >
                            <MDBContainer>
                                <MDBNavbarBrand>
                                    <strong className='white-text'>TRIBE</strong>
                                </MDBNavbarBrand>
                                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                                <MDBCollapse isOpen={collapsed} navbar>
                                    <MDBNavbarNav left>
                                        <MDBNavItem active>
                                            <MDBNavLink to='#!'>WOD</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to='#!'>Progress</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to='#!'>Calorie Tracker</MDBNavLink>
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
                        {collapsed && overlay}
                    </div>
                </Router>
                <MDBView src='https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'>
                    <MDBMask className='rgba-black-light' />
                    <MDBContainer
                        className='d-flex justify-content-center align-items-center'
                        style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
                    >
                        <MDBRow>
                            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                                <MDBAvatar
                                    tag="img"
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                                    className="rounded-circle z-depth-1 img-fluid"
                                    alt="Sample avatar"
                                />
                                <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
                                <p className="text-uppercase blue-text">Athlete</p>
                                <ul className="list-unstyled mb-0">
                                    <a href="#!" className="p-2 fa-lg">
                                        <MDBIcon fab icon="facebook-f" className="blue-text" />
                                    </a>
                                    <a href="#!" className="p-2 fa-lg">
                                        <MDBIcon fab icon="twitter" className="blue-text" />
                                    </a>
                                    <a href="#!" className="p-2 fa-lg">
                                        <MDBIcon fab icon="instagram" className="blue-text" />
                                    </a>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}

export default Home;