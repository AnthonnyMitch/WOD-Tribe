export default (state, action) => {
    switch (action.type) {
      case 'REMOVE_Workout':
        return {
          ...state,
          Workouts: state.Workouts.filter(Workout => {
            return Workout.id !== action.payload;
          })
        }
      case 'ADD_Workout':
        return {
          ...state,
          Workouts: [action.payload, ...state.Workouts]
        }
      case 'EDIT_Workout':
        const updateWorkout = action.payload;
  
        const updateWorkouts = state.Workouts.map(Workout => {
          if (Workout.id === updateWorkout.id) {
            return updateWorkout;
          }
          return Workout;
        })
        return {
          ...state,
          Workouts: updateWorkouts
        }
  
      default:
        return state;
    }
  }
