import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  Workouts: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeWorkout = (id) => {
    dispatch({
      type: 'REMOVE_Workout',
      payload: id
    })
  }

  const addWorkout = (Workout) => {
    dispatch({
      type: 'ADD_Workout',
      payload: Workout
    })
  }

  const editWorkout = (Workout) => {
    dispatch({
      type: 'EDIT_Workout',
      payload: Workout
    })
  }

  return (
    <GlobalContext.Provider value={{
      Workouts: state.Workouts,
      removeWorkout,
      addWorkout,
      editWorkout
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
