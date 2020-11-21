import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from "../../utils/UserContext";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import {

	MDBMask,
	MDBRow,
	MDBCol,
	MDBView,

	MDBContainer,
	MDBBtn

} from 'mdbreact';
import '../ProtectedRoute/user.css';


function ProtectedRoute() {

	//--------------WOD api---------------///
	const [workout, setworkout] = useState({})

	// When this component mounts, grab the workout with the _id of props.match.params.id
	// e.g. localhost:3000/workouts/599dcb67f0f16317844583fc
	

	//-------user api ----------------------///
	const [user, dispatch] = useContext(UserContext)
	console.log(user)
	const [results, setResults] = useState({})
	const [responseData, setResponseData] = useState({})
	const [responseData2, setResponseData2] = useState({})
	const [responseData3, setResponseData3] = useState({})
	const [responseData4, setResponseData4] = useState({data: {}})
	const [formObject, setFormObject] = useState({})
	const [foodObject, setFoodObject] = useState({})
	const [responseDataFood, setResponseDataFood] = useState({})
	// const [foodObject, setFoodObject] = useState({})
	useEffect(() => {
		fetch('api/users/user', {
			credentials: 'include'
		})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				return res.json(res)

			})
			.then(data => {
				console.log(data);
				dispatch({
					type: "GET_USER",
					payload: data
				})

			})
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});

	}, []);

	// create a method to get WOD , call to action. create a button to get the new WOD.
	// create a new function get WOD. get the last WOD created.

	//-----------Fitness Calculator ----------------------///
	 
	function handleChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value })
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log("formValues" + JSON.stringify(formObject))


		const bmi = {
			method: 'GET',
			url: 'https://fitness-calculator.p.rapidapi.com/bmi',
			params: { age: formObject.age, height: formObject.height, weight: formObject.weight, gender: formObject.gender },
			headers: {
				'x-rapidapi-key': '515c74fb86mshcb44e437cf75abcp1b8dc7jsn1ac8f5643c83',
				'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com'
			}
		};
		axios.request(bmi).then(function (response) {
			setResponseData(response.data);
		}).catch(function (error) {
			console.error(error);
		});
		const idealWeight = {
			method: 'GET',
			url: 'https://fitness-calculator.p.rapidapi.com/idealweight',
			params: { age: formObject.age, height: formObject.height, weight: formObject.weight, gender: formObject.gender },
			headers: {
				'x-rapidapi-key': '515c74fb86mshcb44e437cf75abcp1b8dc7jsn1ac8f5643c83',
				'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com'
			}
		};
		axios.request(idealWeight).then(function (response) {
			setResponseData2(response.data);
		}).catch(function (error) {
			console.error(error);
		});
		const bodyFat = {
			method: 'GET',
			url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
			params: { age: formObject.age, height: formObject.height, weight: formObject.weight, gender: formObject.gender },
			headers: {
				'x-rapidapi-key': '515c74fb86mshcb44e437cf75abcp1b8dc7jsn1ac8f5643c83',
				'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com'
			}
		};
		axios.request(bodyFat).then(function (response) {
			setResponseData3(response.data);
		}).catch(function (error) {
			console.error(error);
		});
		const dailyC = {
			method: 'GET',
			url: 'https://fitness-calculator.p.rapidapi.com/dailycalory',
			params: { heigth: formObject.height, age: formObject.age, gender: formObject.gender, weigth: formObject.weight },
			headers: {
				'x-rapidapi-key': '515c74fb86mshcb44e437cf75abcp1b8dc7jsn1ac8f5643c83',
				'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com'
			}
		};
		axios.request(dailyC).then(function (response) {
			setResponseData4(response.data);
		}).catch(function (error) {
			console.error(error);
		});

		//------------ Calorie Tracker-----------------------------------------------/////


		// function handleFoodChange(event) {
		// 	const { name, value } = event.target;
		// 	setFoodObject({ ...foodObject, [name]: value })
		// }

		// function handleFoodSubmit(event) {
		// 	event.preventDefault();
		// 	console.log("foodValues" + JSON.stringify(foodObject))

		// 	const calorieTracker = {
		// 		method: 'GET',
		// 		url: 'https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%20cheese',
		// 		params: { fields: 'item_name,item_id,brand_name,nf_calories,nf_total_fat' },
		// 		headers: {
		// 			'x-rapidapi-key': '515c74fb86mshcb44e437cf75abcp1b8dc7jsn1ac8f5643c83',
		// 			'x-rapidapi-host': 'nutritionix-api.p.rapidapi.com'
		// 		}
		// 	};

		// 	axios.request(calorieTracker).then(function (response) {
		// 		setResponseDataFood(response.data);
		// 	}).catch(function (error) {
		// 		console.error(error);
		// 	});
		// }









	}
	return (

		<div id='user' className="black-skin">
			<MDBView>
				<MDBMask className='rgba-black-light' />
				<MDBContainer
					className='d-flex justify-content-center align-items-center'
					style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
				>
					<MDBRow className="text-center">
						<MDBCol md='12' className='mb-4 white-text text-center'>
							<h3 className='h1-reponsive white-text  font-weight-bold mb-0 pt-md-5 pt-5 text-center'>
								{user.username ? <span className="userText text-white ml-3 pt-1" to="#"> <strong>Welcome  {user.username} !</strong></span> : ""}
							</h3>
							<hr className='hr-light my-4' />
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHaM3MUd1FvlIlAT-6MwVNtrB74al3gosgCCdLHpap3Gf3LDrcJ-flkYV89hb_sjJ3o5KywtYEVF_RjQKgIa894bN_irNLckPMnqX4Wkk&usqp=CAU&ec=45725302'
								className='rounded-circle img-fluid center'
								alt=''
							/>



						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</MDBView>
			<MDBContainer id='wod'>
			<Container fluid >
				<h1 className='white-text'>Workout of The Day</h1>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {workout.muscle} with {workout.weight}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
		  <Jumbotron>
              <h1 id='wodDetails'> WOD Details</h1>
              <p>
                {workout.details}
              </p>
			  </Jumbotron>
          </Col>
        </Row>
      </Container>
			

			</MDBContainer>
			<MDBContainer>
				<section id="body" className="text-center my-5">
					<h2 className="h1-responsive font-weight-bold my-5 white-text">
						Body
        </h2>
					<p className="lead grey-text w-responsive mx-auto mb-5 white-text">
						On this section, you would be able to check your BMI, body fat, ideal weight and the neccessarie daily calories your body needs.
        </p>
					<MDBRow>
						<MDBCol >
							<MDBContainer>
								<MDBRow>
									<MDBCol md="6"><form id="fitnessCal">
										<p className="h4 text-center mb-4 white-text">Athlete Details</p>
										<label htmlFor="defaultFormRegisterNameEx" className="white-text">
											Age
        </label>
										<input type="number" id="ageInput" className="form-control" onChange={handleChange} name="age" />
										<br />
										<label htmlFor="genderInput" className="white-text" id="genderInput">
											Gender
        </label>
										<input type="text" id="weightInput" className="form-control" onChange={handleChange} name="gender" />
										<br />
										<label htmlFor="defaultFormRegisterConfirmEx" className="white-text">
											Weight (kg)
        </label>
										<input type="number" id="weightInput" className="form-control" onChange={handleChange} name="weight" />
										<br />
										<label htmlFor="heightInput" className="white-text">
											Height (cm)
        </label>
										<input type="number" id="heightInput" className="form-control" onChange={handleChange} name="height" />
										<div className="text-center mt-4">
											<MDBBtn color="green" type="submit" id="calculate" onClick={handleSubmit}>
												Calculate
          </MDBBtn>
										</div>
									</form></MDBCol>
									<MDBCol md="6"><form id="fitnessCal">
										<p className="h4 text-center mb-4 white-text">Results</p>
										<label htmlFor="defaultFormRegisterNameEx" className="white-text" id="bmiResult">
											BMI
        </label>

										<output type="text" name="BMI" className="form-control">{responseData.bmi}</output>
										<br />	<label htmlFor="defaultFormRegisterConfirmEx" className="white-text" id="idealWeightResult">
											Ideal Weight (kg)
        </label>
										<output type="text" id="defaultFormRegisterConfirmEx" className="form-control" >{responseData2.Hamwi}</output>

										<br />
										<label htmlFor="defaultFormRegisterEmailEx" className="white-text" id="bodyFatResult">
											Body Fat
        </label>
										<output type="text" id="defaultFormRegisterEmailEx" className="form-control" >{responseData3['Body Fat (BMI method)']}</output>
										<br />
										<label htmlFor="defaultFormRegisterPasswordEx" className="white-text" id="dailyCaloriesResult">
											Daily Calories
        </label>
										<output type="text" id="defaultFormRegisterPasswordEx" className="form-control">{responseData4.data.BMR}</output>
										<div className="text-center mt-4">
											<MDBBtn color="green" type="clear" name="cancelCourse" value="cancel" >
												Clear
          </MDBBtn>
										</div>

									</form></MDBCol>
								</MDBRow>
							</MDBContainer>
						</MDBCol>
					</MDBRow>
				</section>
			</MDBContainer>
			<MDBContainer>
				<section id="progress" className="text-center my-5">
					<h2 className="h1-responsive font-weight-bold my-5 white-text">
						Nutrition
        </h2>
					<p className="lead white-text w-responsive mx-auto mb-5">
						On this section, the Athlete would be able to track their daily calories
        </p>
					<MDBContainer>
						<MDBRow>
							<MDBCol size="4">
								<form>
									<p className="h4 text-center mb-4 white-text">Breakfast</p>
									<label htmlFor="defaultFormLoginEmailEx" className="white-text">
										Food
        </label>
									<input type="text" id="defaultFormLoginEmailEx" className="form-control"  />
									<br />

									<div className="text-center mt-4">
										<MDBBtn color="green" type="submit" >Calculate</MDBBtn>
									</div>
									<label htmlFor="defaultFormLoginPasswordEx" className="white-text">
										Total
        </label>
									<output type="text" id="defaultFormLoginPasswordEx" className="form-control" ></output>
								</form>
							</MDBCol>
							<MDBCol size="4">
								<form>
									<p className="h4 text-center mb-4 white-text">Lunch</p>
									<label htmlFor="defaultFormLoginEmailEx" className="white-text">
										Food
        </label>
									<input type="email" id="defaultFormLoginEmailEx" className="form-control" />
									<br />

									<div className="text-center mt-4">
										<MDBBtn color="green" type="submit">Calculate</MDBBtn>
									</div>
									<label htmlFor="defaultFormLoginPasswordEx" className="white-text">
										Total
        </label>
									<output type="text" id="defaultFormLoginPasswordEx" className="form-control" ></output>
								</form>
							</MDBCol>
							<MDBCol size="4">
								<form>
									<p className="h4 text-center mb-4 white-text">Dinner</p>
									<label htmlFor="defaultFormLoginEmailEx" className="white-text">
										Food
        </label>
									<input type="email" id="defaultFormLoginEmailEx" className="form-control" />
									<br />

									<div className="text-center mt-4">
										<MDBBtn color="green" type="submit">Calculate</MDBBtn>
									</div>
									<label htmlFor="defaultFormLoginPasswordEx" className="white-text">
										Total
        </label>
									<output type="text" id="defaultFormLoginPasswordEx" className="form-control" ></output>
								</form>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
				</section>
			</MDBContainer>
		</div>

	);

}




export default ProtectedRoute;