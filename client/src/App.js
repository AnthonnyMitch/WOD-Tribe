import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/home"
import Login from './pages/login'
import Userpage from './pages/userpage';
import axios from'axios'


// Todo esto es el API de la Calculadora 

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




class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <div> 
        <Switch>

         <Route exact path="/" component={Home}/>
         <Route path="/login" component={Login}/>
         <Route path="/userpage" component={Userpage}/>


       </Switch>
    </div> 
  </BrowserRouter>
);
  }
}
export default App;
