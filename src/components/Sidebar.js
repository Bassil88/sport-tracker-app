import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 bg-opacity-80 h-screen w-0.5/5 p-4 shadow-xl shadow-sky-500">
      <nav>
        <ul>

        <li className="py-4 flex">
            <NavLink
              exact
              to="/"
              className="text-green-100 text-lg hover:text-sky-500"
              activeClassName="font-bold"
            >
              Home
            </NavLink>
          </li>

          <li className="py-4 flex">
            <NavLink
              exact
              to="/progresshistory"
              className="text-green-100 text-lg hover:text-sky-500"
              activeClassName="font-bold"
            >
              Progress History
            </NavLink>
          </li>
          <li className="py-4 flex">
            <NavLink
              exact
              to="/signin"
              className="text-green-100 text-lg hover:text-sky-500"
              activeClassName="font-bold"
            >
              Sign In
            </NavLink>
          </li>
          <li className="py-4 flex">
            <NavLink
              exact
              to="/workoutscheme"
              className="text-green-100 text-lg hover:text-sky-500"
              activeClassName="font-bold"
            >
              Workout Scheme
            </NavLink>
          </li>
{/*           <li className="py-4 flex">
            <NavLink
              exact
              to="/profile"
              className="text-green-100 text-lg hover:text-sky-500"
              activeClassName="font-bold"
            >
              Profile
            </NavLink>
          </li> */}

          <li className="py-4 flex">
            <NavLink
              exact
              to="/ReviewsPage"
              className="text-green-100 text-lg hover:text-sky-500"
              activeClassName="font-bold"
            >
              Reviews
            </NavLink>
          </li>

          <li className="py-4 flex">
            <NavLink
              exact
              to="/ContactPage"
              className="text-green-100 text-lg hover:text-sky-500"
              activeClassName="font-bold"
            >
              Contact us
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
