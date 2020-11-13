import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Line } from "react-chartjs-2";
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
    MDBView,
    MDBIcon,
    MDBContainer,
    MDBBtn

} from 'mdbreact';

import '../pages/user.css';

class User extends React.Component {
    state = {
        collapsed: false
    };
    state = {
        dataLine: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(184, 185, 210, .3)",
                    borderColor: "rgb(35, 26, 136)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(35, 26, 136)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
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

        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <div id='user'>
                <Router>
                    <div>
                        <MDBNavbar
                            color='black'

                            dark
                            expand='md'
                            fixed='top'
                            scrolling
                            transparent
                        >
                            <MDBContainer>
                                <MDBNavbarBrand>
                                    <strong className='white-text'><MDBIcon fab icon="mandalorian" />WOD Tribe</strong>
                                </MDBNavbarBrand>
                                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                                <MDBCollapse isOpen={collapsed} navbar>
                                    <MDBNavbarNav left>
                                        <MDBNavItem>
                                            <MDBNavLink to='.progress'>Progress</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to='#!'>Body</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to='#!'>Nutrition</MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>

                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                        {collapsed && overlay}
                    </div>
                </Router>
                <MDBView>
                    <MDBMask className='rgba-black-light' />
                    <MDBContainer
                        className='d-flex justify-content-center align-items-center'
                        style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
                    >
                        <MDBRow>
                            <MDBCol md='12' className='mb-4 white-text text-center'>
                                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                                    Welcome User
                </h1>
                                <hr className='hr-light my-4' />
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHaM3MUd1FvlIlAT-6MwVNtrB74al3gosgCCdLHpap3Gf3LDrcJ-flkYV89hb_sjJ3o5KywtYEVF_RjQKgIa894bN_irNLckPMnqX4Wkk&usqp=CAU&ec=45725302'
                                    className='rounded-circle img-fluid'
                                    alt=''
                                />



                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
                <section id="progress" className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Progress
        </h2>
                    <p className="lead grey-text w-responsive mx-auto mb-5">
                        Check your improvemnet on different movements and workouts
        </p>
                    <MDBRow>
                        <MDBCol >
                            <MDBContainer>
                                <h3 className="mt-5">Line chart</h3>
                                <Line data={this.state.dataLine} options={{ responsive: true }} />
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                </section>

                <section id="body" className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Body
        </h2>
                    <p className="lead grey-text w-responsive mx-auto mb-5">
                        On this section, you would be able to check your BMI, body fat, ideal weight and the neccessarie daily calories your body needs.
        </p>
                    <MDBRow>
                        <MDBCol >
                            <MDBContainer>
                                <MDBRow>
                                    <MDBCol md="6"><form>
                                        <p className="h4 text-center mb-4">Athlete Details</p>
                                        <label htmlFor="defaultFormRegisterNameEx" className="black-text">
                                            Age
        </label>
                                        <input type="number" id="defaultFormRegisterNameEx" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormRegisterEmailEx" className="black-text">
                                            Sex
        </label>
                                        <input type="text" id="defaultFormRegisterEmailEx" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormRegisterConfirmEx" className="black-text">
                                            Weight
        </label>
                                        <input type="number" id="defaultFormRegisterConfirmEx" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormRegisterPasswordEx" className="black-text">
                                            Height
        </label>
                                        <input type="number" id="defaultFormRegisterPasswordEx" className="form-control" />
                                        <div className="text-center mt-4">
                                            <MDBBtn color="unique" type="submit">
                                                Calculate
          </MDBBtn>
                                        </div>
                                    </form></MDBCol>
                                    <MDBCol md="6"><form>
                                        <p className="h4 text-center mb-4">Results</p>
                                        <label htmlFor="defaultFormRegisterNameEx" className="black-text">
                                            BMI
        </label>
                                        <input type="text" name="BMI" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormRegisterEmailEx" className="black-text">
                                            Body Fat
        </label>
                                        <input type="text" id="defaultFormRegisterEmailEx" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormRegisterConfirmEx" className="black-text">
                                            Ideal Weight
        </label>
                                        <input type="text" id="defaultFormRegisterConfirmEx" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormRegisterPasswordEx" className="black-text">
                                            Daily Calories
        </label>
                                        <input type="text" id="defaultFormRegisterPasswordEx" className="form-control" />
                                        <div className="text-center mt-4">

                                        </div>
                                    </form></MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>
                </section>
                <section id="progress" className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Nutrition
        </h2>
                    <p className="lead grey-text w-responsive mx-auto mb-5">
                        On this section, the Athlete would be able to track their daily calories
        </p>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol size="4">
                                <form>
                                    <p className="h4 text-center mb-4">Breakfast</p>
                                    <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                        Food
        </label>
                                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                                    <br />
                                   
                                    <div className="text-center mt-4">
                                        <MDBBtn color="indigo" type="submit">Calculate</MDBBtn>
                                    </div>
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Total
        </label>
                                    <input type="text" id="defaultFormLoginPasswordEx" className="form-control" />
                                </form>
                            </MDBCol>
                            <MDBCol size="4">
                                <form>
                                    <p className="h4 text-center mb-4">Lunch</p>
                                    <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                        Food
        </label>
                                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                                    <br />
                                   
                                    <div className="text-center mt-4">
                                        <MDBBtn color="indigo" type="submit">Calculate</MDBBtn>
                                    </div>
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Total
        </label>
                                    <input type="text" id="defaultFormLoginPasswordEx" className="form-control" />
                                </form>
                            </MDBCol>
                            <MDBCol size="4">
                                <form>
                                    <p className="h4 text-center mb-4">Dinner</p>
                                    <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                        Food
        </label>
                                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                                    <br />
                                   
                                    <div className="text-center mt-4">
                                        <MDBBtn color="indigo" type="submit">Calculate</MDBBtn>
                                    </div>
                                    <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                        Total
        </label>
                                    <input type="text" id="defaultFormLoginPasswordEx" className="form-control" />
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            </div>
        );
    }
}

export default User;