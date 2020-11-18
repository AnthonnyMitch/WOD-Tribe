import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddWorkout = () => {
  const [name, setName] = useState('');
  const { addWorkout } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newWorkout = {
      id: uuid(),
      name
    }
    addWorkout(newWorkout);
    history.push("/Admin");
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter Workout" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/Admin" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
export default AddWorkout;