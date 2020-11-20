import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Workouts() {
  // Setting our component's initial state
  const [workouts, setWorkouts] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all workouts and store them with setworkouts
  useEffect(() => {
    loadWorkouts()
  }, [])

  // Loads all workouts and sets them to workouts
  function loadWorkouts() {
    API.getWorkouts()
      .then(res => 
        setWorkouts(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a workout from the database with a given id, then reloads workouts from the db
  function deleteWorkout(id) {
    API.deleteWorkout(id)
      .then(res => loadWorkouts())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveworkout method to save the workout data
  // Then reload workouts from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.muscle && formObject.weigth) {
      API.saveWorkout({
        muscle: formObject.muscle,
        weight: formObject.weigth,
        details: formObject.details
      })
        .then(res => loadWorkouts())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Create The Workout of the day</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="muscle"
                placeholder="Muscle (required)"
              />
              <Input
                onChange={handleInputChange}
                name="weigth"
                placeholder="Weigth (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="details"
                placeholder="Details (Optional)"
              />
              <FormBtn
                disabled={!(formObject.weigth && formObject.muscle)}
                onClick={handleFormSubmit}
              >
                Submit Workout
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Workouts</h1>
            </Jumbotron>
            {workouts.length ? (
              <List>
                {workouts.map(workout => (
                  <ListItem key={workout._id}>
                    <Link to={"/workouts/" + workout._id}>
                      <strong>
                        {workout.muscle} with {workout.weight}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteWorkout(workout._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Workouts;