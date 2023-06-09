import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 bg-opacity-80 w-0.5/5 p-4 shadow-xl shadow-sky-500 min-h-screen flex">
      <nav className="w-0.5/5 p-4 shadow-xl">
        <ul className="flex flex-col">

        <li className="py-4 flex">
            <NavLink
              to="/"
              className="text-green-100 text-lg hover:text-sky-500 font-bold">
              Home
            </NavLink>
          </li>

          <li className="py-4 flex">
            <NavLink
              to="/progresshistory"
              className="text-green-100 text-lg hover:text-sky-500 font-bold">
              Progress History
            </NavLink>
          </li>
          <li className="py-4 flex">
            <NavLink
              to="/signin"
              className="text-green-100 text-lg hover:text-sky-500 font-bold">
              Sign In
            </NavLink>
          </li>
          <li className="py-4 flex">
            <NavLink
              to="/workoutscheme"
              className="text-green-100 text-lg hover:text-sky-500 font-bold">
              Workout Scheme
            </NavLink>
          </li>

          <li className="py-4 flex">
            <NavLink
              
              to="/ReviewsPage"
              className="text-green-100 text-lg hover:text-sky-500 font-bold">
              Reviews
            </NavLink>
          </li>

          <li className="py-4 flex">
            <NavLink
              to="/ContactPage"
              className="text-green-100 text-lg hover:text-sky-500 font-bold">
              Contact us
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
