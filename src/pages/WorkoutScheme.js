import React, { useReducer, useState, useEffect } from 'react';

const storedState = JSON.parse(localStorage.getItem('workoutSchemeState'));
const initialState = storedState ? storedState : { exercises: [] };


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case 'REMOVE_EXERCISE':
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise.id !== action.payload
        ),
      };
    // Other cases for handling workout scheme state updates
    default:
      return state;
  }
};

const WorkoutScheme = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [exerciseName, setExerciseName] = useState('');

  useEffect(() => {
    const storedState = localStorage.getItem('workoutSchemeState');
    if (storedState) {
      dispatch({ type: 'SET_STATE', payload: JSON.parse(storedState) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('workoutSchemeState', JSON.stringify(state));
  }, [state]);

  const handleAddExercise = () => {

    if (exerciseName.trim() === '') {
      return; // Don't add empty exercises
    }
    const exercise = {
      id: Date.now(), // Generate a unique id for the exercise
      name: exerciseName,
    };
    dispatch({ type: 'ADD_EXERCISE', payload: exercise });
    setExerciseName('');
  };

  const handleRemoveExercise = (exerciseId) => {
    dispatch({ type: 'REMOVE_EXERCISE', payload: exerciseId });
  };

  return (
    <div>
      <h1>Workout Scheme</h1>
      <div>
        <input
          type="text"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddExercise();
            }
          }}
          
        />
        <button onClick={handleAddExercise}>Add Exercise</button>
      </div>
      <ul>
        {state.exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name}{' '}
            <button onClick={() => handleRemoveExercise(exercise.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutScheme;
