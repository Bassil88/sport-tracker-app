import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-700 h-screen w-0.5/5 p-4">
      <nav>
        <ul>
          <li  className="py-4 flex">
            <NavLink
              exact
              to="/dashboard"
              className="text-blue-600 "
              activeClassName="font-bold"
            >
              Dashboard
            </NavLink>
          </li>
          <li  className="py-4 flex">
            <NavLink
              exact
              to="/signin"
              className="text-blue-600 hover:bg-red"
              activeClassName="font-bold"
            >
              Sign In
            </NavLink>
          </li>

          <li  className="py-4 flex">
            <NavLink
              exact
              to="/workoutscheme"
              className="text-blue-600 "
              activeClassName="font-bold"
            >
              Workout Scheme
            </NavLink>
          </li>
          <li  className="py-4 flex">
            <NavLink
              exact
              to="/profile"
              className="text-blue-600 "
              activeClassName="font-bold"
            >
              Profile
            </NavLink>
          </li>
          <li  className="py-4 flex">
            <NavLink
              exact
              to="/ContactPage"
              className="text-blue-600 "
              activeClassName="font-bold"
            >
              ContactPage
            </NavLink>
          </li>

          <li  className="py-4 flex">
            <NavLink
              exact
              to="/ReviewsPage"
              className="text-blue-600 "
              activeClassName="font-bold"
            >
              ReviewsPage
            </NavLink>
          </li>



        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
