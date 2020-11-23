import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Input, TextArea, FormBtn } from "../components/Form";
import '../pages/workouts.css'
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
      <div id='workouts'>
      <Container fluid >
        <Row>
          <Col size="md-6">
            <Jumbotron  id="jumbo">
              <h2>Create a WOD</h2>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="muscle"
                placeholder="Main Movement (required)"
              />
              <Input
                onChange={handleInputChange}
                name="weigth"
                placeholder="Weigth (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="details"
                placeholder="Details (required)"
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
            <Jumbotron id="jumbo">
              <h2>My WOD</h2>
            </Jumbotron>
            {workouts.length ? (
              <List>
                {workouts.map(workout => (
                  <ListItem key={workout._id}>
                    <Link to={"/workouts/" + workout._id}>
                      <strong>
                        {workout.muscle} with {workout.weight} date: {workout.date}
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
      <MDBFooter color="green" className="font-small darken-3 pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="">WOD Tribe Group Inc </a>
        </MDBContainer>
      </div>
    </MDBFooter>
      </div>
    );
  }


export default Workouts;