import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditWorkout = (props) => {
  const { editWorkout, Workouts } = useContext(GlobalContext);
  const [selectedWorkout, setSelectedWorkout] = useState({
    id: '',
    name: ''
  })
  const history = useHistory();
  const currentWorkoutId = props.match.params.id;

  useEffect(() => {
    const WorkoutId = currentWorkoutId;
    const selectedWorkout = Workouts.find(Workout => Workout.id === WorkoutId);
    setSelectedWorkout(selectedWorkout);
  }, [currentWorkoutId, Workouts])

  const onChange = (e) => {
    setSelectedWorkout({ ...selectedWorkout, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editWorkout(selectedWorkout);
    history.push("/Admin")
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={selectedWorkout.name} onChange={onChange} name="name" placeholder="Enter Workout" required></Input>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/Admin" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
export default EditWorkout;