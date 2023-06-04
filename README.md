   # React Progress History and Workout Scheme Project



This project my React application intended todo two features: 
1. Tracking the **workout progress** with history visualized using **charts** **:)** 

The Progress History component fetches exercise data from an API and visualizes it using charts. It utilizes the Recharts library to create two charts:
 - Exercise Category Chart: This chart shows the number of exercises in each exercise category. It uses the data fetched from the API to calculate the number of exercises in each category.
 - Calorie Chart: This chart displays the calories burned for each exercise. It uses pre-defined workout data to retrieve the exercise names and calories burned.

The component also calculates the total number of exercise categories by checking the length of the exerciseCategoryData array.

2. **Workout Scheme** component which allows users to create and track workout schemes.
The Workout Scheme component allows users to create and track workout schemes. It includes the following functionality:

 -  Managing Exercises: Users can add exercises to the scheme, remove exercises, and add sets to exercises.
 -  Managing Sets: Each exercise can have multiple sets. Users can update the weight and reps of each set, remove sets, and toggle the finished status.
 - Workout Timer: The component includes a workout timer that counts down from 30 minutes (1800 seconds). Users can start and stop the timer, and there is a reset button to set the timer back to 30 minutes.

 The component includes helper functions to handle various actions such as adding sets, updating weights and reps, removing sets, toggling finished status, and managing the timer.

 
 
 ### Conclusion
 This React Progress History and Workout Scheme project provides a comprehensive application for tracking exercise progress and creating workout schemes. It demonstrates the usage of React, fetching data from an API, creating charts with the Recharts library, and managing state with hooks. 

   ## Dependencies


This project relies on the following dependencies:

 - React: A JavaScript library for building user interfaces.
 - @mui/material: Material-UI components for styling the application.
 - Recharts: A composable charting library built on React components.
 - react-icons: A collection of icons for React applications.