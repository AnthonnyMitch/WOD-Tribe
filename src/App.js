import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import logo from "./logo.png";
import ClassicFormPage from "./components/sign-up"
class App extends Component {
  render() {
    return (
     <ClassicFormPage/>
    );
  }
}

export default App;
