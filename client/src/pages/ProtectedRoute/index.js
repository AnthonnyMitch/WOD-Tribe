import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from "../../utils/UserContext";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Recipe from "../../components/Recipes/Recipe";
import { v4 as uuidv4 } from "uuid";
import Alert from "../../components/Recipes/Alert";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {

	MDBMask,
	MDBRow,
	MDBCol,
	MDBView,
	MDBFooter,
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
	const [responseData4, setResponseData4] = useState({ data: {} })
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
	}
	// ------------ Calorie Tracker-----------------------------------------------/////
	const [query, setQuery] = useState("");
	const [recipes, setRecipes] = useState([]);
	const [alert, setAlert] = useState("");

	const APP_ID = "fbc89f8b";
	const APP_KEY = "ade471b90d06bc25139c8df9ae48aa60	";

	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

	const getData = async () => {
		if (query !== "") {
			const result = await axios.get(url);
			if (!result.data.more) {
				return setAlert("No food with such name");
			}
			console.log(result);
			setRecipes(result.data.hits);
			setQuery("");
			setAlert("");
		} else {
			setAlert("Please fill the form");
		}
	};

	const onChange = e => setQuery(e.target.value);

	const onSubmit = e => {
		e.preventDefault();
		getData();
	};








	return (

		<div id='user' className="black-skin">
			<MDBView>
				<MDBMask className='rgba-black-light' />
				<MDBContainer
					className='d-flex justify-content-center align-items-center'
					style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
				>
					<MDBRow className="text-center" id="userface">
						<MDBCol md='12' className='mb-4 white-text text-center'>
							<h1 className='h1-reponsive white-text  font-weight-bold mb-0 pt-md-5 pt-5 text-center'>
								{user.username ? <span className="userText text-white ml-3 pt-1" to="#"> <strong>Welcome  {user.username} !</strong></span> : ""}
							</h1>
							<hr className='hr-light my-4' />
							{/* <img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MYuqGphvVWxQvfX7YuE25NjWM1dq2e_fSg&usqp=CAU'
								className='rounded-circle img-fluid center'
								alt=''
								id="userimage"
							/> */}



						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</MDBView>
			<MDBContainer id='wod'>
				<Container fluid >
					<h1 className='white-text text-center'> <strong>Workout of The Day</strong></h1>
					<div id="mando" className="item-center" >
					
							<Card className="text-center card" >
								<Card.Header>WOD</Card.Header>
								<Card.Body>
									<Card.Title>BackSquat with 120lbs</Card.Title>
									<Card.Text>
									<p>Mando (TimeCap 20 min)</p>	
									<p>	21 BackSquat 
										21 Burpees
										21 SitUps
									</p>
									<p>	15 BackSquat 
										15 Burpees
										15 SitUps
									</p>
									<p>	9 BackSquat 
										9 Burpees
										9 SitUps</p>
										<p>	6 BackSquat 
										6 Burpees
										6 SitUps</p>
										<p>	3 BackSquat 
										3 Burpees
										3 SitUps</p>
									
									
    </Card.Text>
									<Button variant="success">Save Score</Button>
								</Card.Body>
								
							</Card>
						
					</div>
					
				</Container>


			</MDBContainer>
			<MDBContainer>
				<section id="body" className="text-center my-5">
					<h2 className="h1-responsive font-weight-bold my-5 white-text">
						Fitness Calculator
        </h2>
					<h4 className="lead grey-text w-responsive mx-auto mb-5 white-text">
						On this section, you would be able to check your BMI, body fat, ideal weight and the neccessarie daily calories your body needs.
        </h4>
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
				<section id="progress" className="text-center my-5" id="nutrition">
					<h2 className="h1-responsive font-weight-bold my-5 white-text">
						Recipes
        </h2>
					<h4 className="lead white-text w-responsive mx-auto mb-5">
						On this section, the Athlete would be able to find Recipes to help them improve their diet by juts typing ingredients.
        </h4>
					<MDBContainer>
						<MDBRow>

							<form onSubmit={onSubmit} className="search-form">
								{alert !== "" && <Alert alert={alert} />}
								<input
									type="text"
									name="query"
									onChange={onChange}
									value={query}
									autoComplete="off"
									placeholder="Search Food"
								/>
								<input type="submit" value="Search" />
							</form>
							<div className="recipes">
								{recipes !== [] &&
									recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
							</div>
						</MDBRow>
					</MDBContainer>
				</section>
			</MDBContainer>
			<MDBFooter color="green" className="font-small darken-3 pt-0">
				<MDBContainer>
					<MDBRow>
						<MDBCol md="12" className="py-5">
							<div className="mb-5 flex-center">
								<a className="fb-ic">
									<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
									</i>
								</a>
								<a className="tw-ic">
									<i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
									</i>
								</a>
								<a className="gplus-ic">
									<i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
									</i>
								</a>
								<a className="li-ic">
									<i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
									</i>
								</a>
								<a className="ins-ic">
									<i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
									</i>
								</a>
								<a className="pin-ic">
									<i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
								</a>
							</div>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
				<div className="footer-copyright text-center py-3">
					<MDBContainer fluid>
						&copy; {new Date().getFullYear()} Copyright:{" "}
						<a href="">WOD Tribe Group Inc </a>
					</MDBContainer>
				</div>
			</MDBFooter>
		</div>

	);

}




export default ProtectedRoute;