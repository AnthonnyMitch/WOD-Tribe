import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/home"
import Login from './pages/login'
import Userpage from './pages/userpage'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <div> 
        <Switch>
         <Route path="/" component={Home}/>
         <Route path="/login" component={Login}/>
         <Route path="/userpage" component={Userpage}/>
        
       </Switch>
    </div> 
  </BrowserRouter>
);
  }
}

export default App;
