import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Sidebar';
import ProgressHistory from './pages/ProgressHistory';
import SignIn from './pages/SignIn';
import WorkoutScheme from './pages/WorkoutScheme';
import Profile from './pages/Profile';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import Footer from './pages/Footer';
import Home from './pages/Home';


const App = () => {
  return (
    <Router>
      <div className="flex">
        <Header />
        <div className="flex-1">
          <Routes>
          <Route exact={true} path="/" element={<Home />} />
            <Route path="/progresshistory" element={<ProgressHistory />} >
            <Route path="/progresshistory/footer" element={<Footer />} />

            </Route>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/workoutscheme" element={<WorkoutScheme />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/reviewspage" element={<ReviewsPage />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
};

export default App;
