import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/navigation/Sidebar';

import Home from './pages/Home';
import ProgressHistory from './pages/ProgressHistory';
import WorkoutScheme from './pages/WorkoutScheme';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/progresshistory" element={<ProgressHistory />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/workoutscheme" element={<WorkoutScheme />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/reviewspage" element={<ReviewsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;