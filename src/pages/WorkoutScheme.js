import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, TextField } from '@mui/material';
import { PlayArrow as PlayArrowIcon, Pause as PauseIcon, Delete as DeleteIcon } from '@mui/icons-material';

const WorkoutScheme = () => {
  const [exercises, setExercises] = useState([
    {
      id: 1,
      sets: [
        {
          id: 1,
          weight: '',
          reps: '',
          isFinished: false,
        },
      ],
    },
  ]);

  const [timer, setTimer] = useState(1800); // 30 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);



  // Function to format the remaining time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  // Function to remove an exercise
  const removeExercise = (exerciseId) => {
    const updatedExercises = exercises.filter((exercise) => exercise.id !== exerciseId);
    setExercises(updatedExercises);
  };

  // Function to add a new set to an exercise
  const addSet = (exerciseId) => {
    const newSet = {
      id: exercises[exerciseId - 1].sets.length + 1,
      weight: '',
      reps: '',
      isFinished: false,
    };
    const updatedExercises = [...exercises];
    updatedExercises[exerciseId - 1].sets.push(newSet);
    setExercises(updatedExercises);
  };

  // Function to update the weight of a set
  const updateWeight = (exerciseId, setId, newWeight) => {
    const updatedExercises = [...exercises];
    updatedExercises[exerciseId - 1].sets[setId - 1].weight = newWeight;
    setExercises(updatedExercises);
  };

  // Function to update the reps of a set
  const updateReps = (exerciseId, setId, newReps) => {
    const updatedExercises = [...exercises];
    updatedExercises[exerciseId - 1].sets[setId - 1].reps = newReps;
    setExercises(updatedExercises);
  };

  // Function to remove a set from an exercise
  const removeSet = (exerciseId, setId) => {
    const updatedExercises = [...exercises];
    updatedExercises[exerciseId - 1].sets = updatedExercises[exerciseId - 1].sets.filter(
      (set) => set.id !== setId
    );
    setExercises(updatedExercises);
  };

  // Function to toggle the finished status of a set
  const toggleFinished = (exerciseId, setId) => {
    const updatedExercises = [...exercises];
    const currentStatus = updatedExercises[exerciseId - 1].sets[setId - 1].isFinished;
    updatedExercises[exerciseId - 1].sets[setId - 1].isFinished = !currentStatus;
    setExercises(updatedExercises);
  };

  // Function to add a new exercise
  const addExercise = () => {
    const newExercise = {
      id: exercises.length + 1,
      sets: [
        {
          id: 1,
          weight: '',
          reps: '',
          isFinished: false,
        },
      ],
      
    };
    setExercises([...exercises, newExercise]);
  };

  // Function to start/stop the timer
  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  // Function to update the timer
  useEffect(() => {
    let intervalId;
    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isTimerRunning]);

  
  
  return (
<Box
  className="p-2 bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-md rounded-md overflow-hidden bg-transparent"
>
  <Typography variant="h1" gutterBottom className="text-white">
    Workout
  </Typography>

  <Box className="flex items-center justify-end mb-2">
    <Button variant="contained" onClick={toggleTimer} className="text-white">
      {isTimerRunning ? <PauseIcon /> : <PlayArrowIcon />}
    </Button>
    <Typography variant="h2" className="ml-2 text-white">
      Timer: {formatTime(timer)}
    </Typography>
  </Box>

  {exercises.map((exercise) => (
    <div key={exercise.id} className="mt-4">
      <Typography variant="h4" className="text-white">
        Exercise {exercise.id}
      </Typography>

      <div className="space-x-2">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => removeExercise(exercise.id)}
          className="mt-2"
        >
          Remove Exercise
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addSet(exercise.id)}
          className="mt-2"
        >
          Add Set
        </Button>
      </div>

      <Table className="mt-2">
        <TableHead>
          <TableRow >
            <TableCell style={{ color: 'white' }}>Set</TableCell>
            <TableCell style={{ color: 'white' }}>Weight</TableCell>
            <TableCell style={{ color: 'white' }}>Reps</TableCell>
            <TableCell style={{ color: 'white' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exercise.sets.map((set) => (
            <TableRow key={set.id} className="last-child:border-b-0">
              <TableCell style={{ color: 'white' }}>{set.id}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={set.weight}
                  onChange={(e) => updateWeight(exercise.id, set.id, e.target.value)}
                  InputProps={{ style: { color: 'red' } }}
                  className="bg-white rounded-md"
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={set.reps}
                  onChange={(e) => updateReps(exercise.id, set.id, e.target.value)}
                  InputProps={{ style: { color: 'red' } }}
                  className="bg-white rounded-md"
                />
              </TableCell>
              <TableCell className="">
              <div className="space-x-2">
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={() => removeSet(exercise.id, set.id)}
                  className=""
                >
                  Remove Set
                </Button>
                <Button
                  variant="contained"
                  color={set.isFinished ? 'primary' : 'secondary'}
                  onClick={() => toggleFinished(exercise.id, set.id)}
                  className={`bg-${set.isFinished ? 'sky-500' : 'teal-500'} rounded-md`}
                >
                  {set.isFinished ? 'Mark as Unfinished' : 'Mark as Finished'}
                </Button>
              </div>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ))}

  <Box className="flex justify-start mt-4">
    <Button variant="contained" color="primary" onClick={addExercise} className="mr-2">
      Add Exercise
    </Button>
  </Box>
</Box>




  );  
}
  export default WorkoutScheme;