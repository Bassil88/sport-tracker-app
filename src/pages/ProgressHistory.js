import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import workoutData from '../data/workoutData';
import { GiWeightLiftingUp, GiFire } from 'react-icons/gi';
import { FaDumbbell } from 'react-icons/fa';

const ProgressHistory = () => {
  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseCategoryData, setExerciseCategoryData] = useState([]);

  const fetchExerciseData = async () => {
    try {
      const response = await fetch('https://wger.de/api/v2/exercise/');
      const data = await response.json();

      setExerciseData(data.results);
    } catch (error) {
      console.error('Error fetching exercise data:', error);
    }
  };

  const fetchExerciseCategoryData = async () => {
    try {
      const response = await fetch('https://wger.de/api/v2/exercisecategory/');
      const data = await response.json();

      setExerciseCategoryData(data.results);
    } catch (error) {
      console.error('Error fetching exercise category data:', error);
    }
  };

  useEffect(() => {
    fetchExerciseData();
    fetchExerciseCategoryData();
  }, []);

  // Build chart data by category
  const exerciseCategoryChartData = exerciseCategoryData.map((category) => ({
    name: category.name,
    exercises: exerciseData.filter((exercise) => exercise.category === category.id).length,
  }));

  // exercise name and the calories burned for each exercise
  const createCalorieChartData = () => {
    const chartData = [];

    for (const category of workoutData) {
      for (const exercise of category.exercises) {
        chartData.push({
          name: exercise.name,
          calories: exercise.caloriesBurned || 0,
        });
      }
    }

    return chartData;
  };

  const calorieChartData = createCalorieChartData();

  // Total exercise categories
  const totalCategories = exerciseCategoryData.length;

  const chartTitleStyle = {
    color: 'deeppink',
    fontWeight: 'bold',
  };

  return (
    <Box className="bg-transparent p-4 flex flex-col items-center justify-center ">
      <Box className="flex-wrap flex justify-center mb-4 bg-gradient-to-tl from-sky-900 via-gray-900 bg-opacity-80 rounded-xl">
        <Box className=" m-4 ">
          <Typography variant="h5" style={chartTitleStyle}>
            <FaDumbbell className="m-4" />
            Total Exercises per Category
          </Typography>

          <LineChart width={600} height={600} data={exerciseCategoryChartData}>
            <XAxis dataKey="name" stroke="yellow" />
            <YAxis stroke="yellow" />
            <CartesianGrid stroke="#555" strokeDasharray="3 1" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="exercises" stroke="skyblue" fill="white" />
          </LineChart>
        </Box>

        <Box className=" m-9  ">
          <Typography variant="h5" style={chartTitleStyle}>
            <GiFire className="m-4" />
            Calories Burned per Exercise
          </Typography>
          <BarChart width={600} height={600} data={calorieChartData}>
            <XAxis dataKey="name" stroke="lightyellow" />
            <YAxis stroke="limegreen" />
            <CartesianGrid stroke="#555" strokeDasharray="3 1" />
            <Tooltip />
            <Legend />
            <Bar dataKey="calories" fill="limegreen" />
          </BarChart>
        </Box>
      </Box>

      <Box>
        <Typography
          variant="h4"
          className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 "
        >
          <GiWeightLiftingUp className="mr-2 text-4xl text-white" />
          Total Categories: {totalCategories}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressHistory;
