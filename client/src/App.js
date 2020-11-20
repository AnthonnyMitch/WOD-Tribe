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
import Workouts from "./pages/Workouts";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/ProtectedRoute";

import { UserProvider } from "./utils/UserContext"

//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (

	<UserProvider>
		<Router>

			
		<Nav className="App-header" />
			<Switch>
			
				<Route path="/public" component={PublicRoute} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<PrivateRoute path="/protected" component={ProtectedRoute} />
				<Route exact path={["/", "/workouts"]}>
            <Workouts />
          </Route>
          <Route exact path="/workouts/:id"></Route>
				{/* <Route component={NoMatch} /> */}
			</Switch>
		</Router>
	</UserProvider>

);


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
);










export default AuthExample;

