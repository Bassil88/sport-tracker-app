import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { workoutData } from '../WorkoutData';
import { GiWeightLiftingUp, GiFire } from 'react-icons/gi';
import { FaDumbbell } from 'react-icons/fa';

const ProgressHistory = () => {
  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseCategoryData, setExerciseCategoryData] = useState([]);

  useEffect(() => {
    const getExerciseData = async () => {
      try {
        const response = await fetch('https://wger.de/api/v2/exercise/');
        const data = await response.json();
        setExerciseData(data.results);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
      }
    };

    const getExerciseCategoryData = async () => {
      try {
        const response = await fetch('https://wger.de/api/v2/exercisecategory/');
        const data = await response.json();
        setExerciseCategoryData(data.results);
      } catch (error) {
        console.error('Error fetching exercise category data:', error);
      }
    };

    getExerciseData();
    getExerciseCategoryData();
  }, []);

  const exerciseChartData = exerciseCategoryData?.map((category) => ({
    name: category.name,
    exercises: exerciseData.filter((exercise) => exercise.category === category.id).length,
  }));

  const calorieChartData = workoutData.flatMap((category) =>
    category.exercises.map((exercise) => ({
      name: exercise.name,
      calories: exercise.caloriesBurned || 0,
    }))
  );

  const totalExercises = exerciseCategoryData?.length || 0;

  return (
    <Box className="bg-transparent p-4 flex flex-col items-center justify-center ">
      <Box className="flex justify-between mb-4 bg-gradient-to-tl from-sky-900 via-gray-900 bg-opacity-80 rounded-xl">
        <Box className="flex-1 m-4">
          <Typography variant="h5" style={{ color: 'deepPink', fontWeight:'bolder' }} >
            <FaDumbbell className=" m-4 "/>
            Total Exercises per Category
          </Typography>
          <LineChart width={600} height={600} data={exerciseChartData}>
            <XAxis dataKey="name" stroke="yellow" />
            <YAxis stroke="yellow" />
            <CartesianGrid stroke="#555" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="exercises" stroke="skyblue" fill="white" />
          </LineChart>
        </Box>
        <Box className="flex-1 mr-6 ">
          <Typography variant="h5" style={{ color: 'deepPink', marginBottom: '1rem' , fontWeight:'bolder'}}>
            <GiFire className="m-4 "/>
            Calories Burned per Exercise
          </Typography>
          <BarChart width={600} height={600} data={calorieChartData}>
            <XAxis dataKey="name" stroke="lightyellow" />
            <YAxis stroke="limegreen" />
            <CartesianGrid stroke="#555" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <Bar dataKey="calories" fill="limegreen" />
          </BarChart>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4" className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 ">
          <GiWeightLiftingUp className="mr-2 text-4xl text-white" />
          Total Exercises: {totalExercises}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressHistory;
