import React from 'react';
import { Link } from "react-router-dom";
import 
  { Jumbotron, Container } 

from "reactstrap";
import {MDBIcon} from 'mdbreact';

export const Heading = () => {
  return (
    <div>
    <Jumbotron fluid className="text-center">
      <Container fluid>
        <h1 className="display-3"><MDBIcon fab icon="mandalorian" />WOD Tribe</h1>
        <p className="lead">Create the Workout of the day for your Tribe.</p>
        <Link className="btn btn-primary" to="/add">Add WOD</Link>
      </Container>
    </Jumbotron>
  </div>
  )
}

