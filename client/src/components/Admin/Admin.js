import React from 'react';
import { Container } from 'reactstrap';
import { Heading } from "./Heading";
import { WorkoutList } from "./WorkoutList";

export const Admin = () => {
  return (
    <>
    <Container>
      <Heading />
      <WorkoutList />
      </Container>
    </>
  )
}
