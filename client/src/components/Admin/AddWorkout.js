import React, { useState, useContext } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  
  Button
} from "reactstrap";
import { MDBContainer, MDBRow, MDBCol, MDBInput} from 'mdbreact';


export const AddWorkout = () => {
  const [formObject, setFormObject] = useState({})
  const { addWorkout } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newWorkout = {
      id: uuid(),
      muscle : formObject.muscle,
      details: formObject.details
      
    }
    console.log(newWorkout);
    addWorkout(newWorkout);
    history.push("/Admin");
  }

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
    
    
  }
  

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <Form onSubmit={onSubmit} className="margin 30px">
          <p className="h4 text-center mb-4">WOD</p>
            <FormGroup>
            <Label>muscle</Label>
              <MDBInput type="textarea" rows="2"  onChange={onChange} name="muscle" placeholder="Enter Workout" required />
              <Label>WOD Details</Label>
              <MDBInput type="textarea" rows="2"  onChange={onChange} name="details" placeholder="Enter Workout" required />
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/Admin" className="btn btn-danger ml-2">Cancel</Link>
          </Form>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
  )
}
