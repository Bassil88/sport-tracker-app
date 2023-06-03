import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { workoutData } from '../WorkoutData';
import { GiWeightLiftingUp, GiFire } from 'react-icons/gi';
import { FaDumbbell } from 'react-icons/fa';

const Dashboard = () => {
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
    <Box className="bg-transparent p-4 flex flex-col items-center justify-center">
      <Box className="flex justify-between mb-4">
        <Box className="flex-1 mr-4">
          <Typography variant="h5" className="text-white mb-4">
            <FaDumbbell style={{ marginRight: '0.5rem' }} />
            Total Exercises per Category
          </Typography>
          <LineChart width={600} height={600} data={exerciseChartData}>
            <XAxis dataKey="name" stroke="#000000" />
            <YAxis stroke="#000000" />
            <CartesianGrid stroke="#555" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="exercises" stroke="#00ff00" fill="white" />
          </LineChart>
        </Box>
        <Box className="flex-1 ml-4">
          <Typography variant="h5" style={{ color: 'white', marginBottom: '1rem' }}>
            <GiFire style={{ marginRight: '0.5rem' }} />
            Calories Burned per Exercise
          </Typography>
          <BarChart width={600} height={600} data={calorieChartData}>
            <XAxis dataKey="name" stroke="#000000" />
            <YAxis stroke="#000000" />
            <CartesianGrid stroke="#555" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <Bar dataKey="calories" fill="#eb1975" />
          </BarChart>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4" className="text-white mt-8">
          <GiWeightLiftingUp className="mr-2" />
          Total Exercises: {totalExercises}
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
