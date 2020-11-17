import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const WorkoutList = () => {
  const { Workouts, removeWorkout } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {Workouts.length > 0 ? (
        <>
          {Workouts.map(Workout => (
            <ListGroupItem className="d-flex" key={Workout.id}>
              <strong>{Workout.name}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${Workout.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button onClick={() => removeWorkout(Workout.id)} color="danger">Delete</Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Workouts</h4>
        )}
    </ListGroup>
  )
}
export default WorkoutList;