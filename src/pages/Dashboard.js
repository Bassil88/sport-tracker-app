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
    <Box style={{ backgroundColor: '#000000', padding: '1rem' }}>
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box style={{ flex: 1, marginRight: '1rem' }}>
          <Typography variant="h4" style={{ color: '#fff', marginBottom: '1rem' }}>
            <FaDumbbell style={{ marginRight: '0.5rem' }} />
            Total Exercises per Category
          </Typography>
          <LineChart width={500} height={300} data={exerciseChartData}>
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <CartesianGrid stroke="#555" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="exercises" stroke="#00ff00" fill="#00ff00" />
          </LineChart>
        </Box>
        <Box style={{ flex: 1, marginLeft: '1rem' }}>
          <Typography variant="h4" style={{ color: '#fff', marginBottom: '1rem' }}>
            <GiFire style={{ marginRight: '0.5rem' }} />
            Calories Burned per Exercise
          </Typography>
          <BarChart width={500} height={300} data={calorieChartData}>
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <CartesianGrid stroke="#555" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <Bar dataKey="calories" fill="#ff0000" />
          </BarChart>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4" style={{ color: '#fff', marginTop: '2rem' }}>
          <GiWeightLiftingUp style={{ marginRight: '0.5rem' }} />
          Total Exercises: {totalExercises}
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
