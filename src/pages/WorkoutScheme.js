import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, TextField } from '@mui/material';
import {Delete as DeleteIcon, PlayArrowTwoTone, PauseOutlined, RestoreRounded } from '@mui/icons-material';

const WorkoutScheme = () => {

/*   const initState = {
    id: 1,
    sets: [
      {
        id: 1,
        weight: '',
        reps: '',
        isFinished: false,
      },
    ],
  } */
  const [exercises, setExercises] = useState([]);
 
  useEffect(() => {
    const storedExercises = localStorage.getItem('exercises');
    if (storedExercises) {
      setExercises(JSON.parse(storedExercises));
    }
  }, []);

  // Save exercises to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('exercises', JSON.stringify(exercises));
  }, [exercises]);

    // to add a new exercise
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


     // to remove an exercise with filter
    const removeExercise = (exerciseId) => {
      const updatedExercises = 
      exercises.filter((exercise) => exercise.id !== exerciseId);
      setExercises(updatedExercises);
    };

  // to add a new set to an exercise
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

  // to update the weight of a set
    const updateWeight = (exerciseId, setId, newWeight) => {
      const updatedExercises = [...exercises];
      updatedExercises[exerciseId - 1].sets[setId - 1].weight = newWeight;
      setExercises(updatedExercises);
    };

  // to update the reps of a set
    const updateReps = (exerciseId, setId, newReps) => {
      const updatedExercises = [...exercises];
      updatedExercises[exerciseId - 1].sets[setId - 1].reps = newReps;
      setExercises(updatedExercises);
    };

    // to remove a set from an exercise
    const removeSet = (exerciseId, setId) => {
      const updatedExercises = [...exercises];
      updatedExercises[exerciseId - 1].sets = updatedExercises[exerciseId - 1].sets.filter(
        (set) => set.id !== setId
      );
      setExercises(updatedExercises);
    };

    // to toggle the finished status of a set
    const toggleFinished = (exerciseId, setId) => {
      const updatedExercises = [...exercises];
      const currentStatus = updatedExercises[exerciseId - 1].sets[setId - 1].isFinished;
      updatedExercises[exerciseId - 1].sets[setId - 1].isFinished = !currentStatus;
      setExercises(updatedExercises);
    };


    /*-------------Timer SECTION----------------------------------  */
    const [timer, setTimer] = useState(1800); // 30 minutes in seconds
    
    // to format the remaining time as MM:SS
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');
      
      return `${formattedMinutes}:${formattedSeconds}`;
    };


    const [isTimerRunning, setIsTimerRunning] = useState(false);

    // to update the timer
    useEffect(() => {
      let intervalSetter;
      if (isTimerRunning) {
        intervalSetter = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
      }
      return () => clearInterval(intervalSetter);
    }, [isTimerRunning]);
    
    
    
    // to start/stop the timer
    const toggleTimer = () => {
      setIsTimerRunning(!isTimerRunning);
    };


    // to reset the timer
    const resetTimer = () => {
      setTimer(1800); // Reset timer to 30 minutes in seconds
      setIsTimerRunning(false);
    };
 
  return (
    <Box className="p-2 m-4 bg-gradient-to-tl from-sky-900 via-gray-900 bg-opacity-80 rounded-xl">
      <Typography variant="h1" gutterBottom className="text-white">
        Workout
      </Typography>

      <Box className="flex items-center justify-end mb-2 m-12">
        <Button style={{margin:'0.5rem', padding:'2rem'}} variant="contained" onClick={toggleTimer} >
          {isTimerRunning ? <PauseOutlined /> : <PlayArrowTwoTone />}
        </Button>
        <Button variant="outlined" style={{marginRight:'2rem', padding:'1.5rem'}} onClick={resetTimer} >
          <RestoreRounded />
        </Button>
        <Typography
          variant="h2"
          className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-100">
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
          className="mt-2">
          Remove Exercise
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addSet(exercise.id)}
          className="mt-2">
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
                  type="text"
                  value={set.weight}
                  onChange={(e) => updateWeight(exercise.id, set.id, e.target.value)}
                  InputProps={{ style: { color: 'red' } }}
                  className="bg-white rounded-md"/>
              </TableCell>
              <TableCell>
                <TextField
                  type="text"
                  value={set.reps}
                  onChange={(e) => updateReps(exercise.id, set.id, e.target.value)}
                  InputProps={{ style: { color: 'red' } }}
                  className="bg-white rounded-md"/>
              </TableCell>
              <TableCell className="">
              <div className="space-x-2">
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={() => removeSet(exercise.id, set.id)}
                  className="">
                  Remove Set
                </Button>
                <Button
                  variant="contained"
                  color={set.isFinished ? 'primary' : 'secondary'}
                  onClick={() => toggleFinished(exercise.id, set.id)}
                  className={`bg-${set.isFinished ? 'sky-500' : 'teal-500'} rounded-lg`}>
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
