import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/ProtectedRoute";
import './App.css';
import { UserProvider } from "./utils/UserContext"
import axios from 'axios'

const bmi = {
	method: 'GET',
	url: 'https://fitness-calculator.p.rapidapi.com/bmi', 
	params: {age: '25', height: '180', weight: '65'},
	headers: {
	  'x-rapidapi-key': '515c74fb86mshcb44e437cf75abcp1b8dc7jsn1ac8f5643c83',
	  'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com'
	}
  };
  axios.request(bmi).then(function (response) {
	  console.log(response.data);
  }).catch(function (error) {
	  console.error(error);
  });
  const idealWeight = {
	method: 'GET',
	url: 'https://fitness-calculator.p.rapidapi.com/idealweight',
	params: {weight: '70', gender: 'male', height: '178'},
	headers: {
	  'x-rapidapi-key': '515c74fb86mshcb44e437cf75abcp1b8dc7jsn1ac8f5643c83',
	  'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com'
	}
  };
  axios.request(idealWeight).then(function (response) {
	  console.log(response.data);
  }).catch(function (error) {
	  console.error(error);
  });
  const bodyFat = {
	method: 'GET',
	url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
	params: {
	  waist: '96',
	  gender: 'male',
	  neck: '50',
	  heigth: '178',
	  hip: '92',
	  age: '25',
	  weigth: '70'
	},
	headers: {
	  'x-rapidapi-key': '515c74fb86mshcb44e437cf75abcp1b8dc7jsn1ac8f5643c83',
	  'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com'
	}
  };
  axios.request(bodyFat).then(function (response) {
	  console.log(response.data);
  }).catch(function (error) {
	  console.error(error);
  });
  const dailyC = {
	method: 'GET',
	url: 'https://fitness-calculator.p.rapidapi.com/dailycalory',
	params: {heigth: '180', age: '25', gender: 'male', weigth: '70'},
	headers: {
	  'x-rapidapi-key': '515c74fb86mshcb44e437cf75abcp1b8dc7jsn1ac8f5643c83',
	  'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com'
	}
  };
  axios.request(dailyC).then(function (response) {
	  console.log(response.data);
  }).catch(function (error) {
	  console.error(error);
  });
  const options = {
	method: 'GET',
	url: 'https://nutritionix-api.p.rapidapi.com/v1_1/search/bacon',
	params: {fields: 'item_name,item_id,brand_name,nf_calories,nf_total_fat'},
	headers: {
	  'x-rapidapi-key': '515c74fb86mshcb44e437cf75abcp1b8dc7jsn1ac8f5643c83',
	  'x-rapidapi-host': 'nutritionix-api.p.rapidapi.com'
	}
  };
  axios.request(options).then(function (response) {
	  console.log(response.data);
  }).catch(function (error) {
	  console.error(error);
  });
//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<UserProvider>
		<Router>
			<div>
				<Nav className="App-header" />
				<Container>
					<Switch>
						<Route path="/public" component={PublicRoute} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<PrivateRoute path="/protected" component={ProtectedRoute} />
						{/* <Route component={NoMatch} /> */}
					</Switch>
				</Container>
			</div>
		</Router>
	</UserProvider>
)




// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Router>
		<div>

			<Route {...rest} render={props => (

				Auth.isAuthenticated ? (
					<Component {...props} />
				) : (
						<div className="container">
							<div className="alert alert-danger text-center" role="alert">
								This page is private to authenticated users.
					</div>
							<div className="row">
								<div className="col-sm"></div>
								<div className="col-sm">
									<h3>Please Register or Login</h3>
								</div>
								<div className="col-sm"></div>
							</div>
							<Redirect to={{
								pathname: '/login',
								state: { from: props.location }
							}} />
						</div>
					)
			)} />
		</div>
	</Router>
)








export default AuthExample

