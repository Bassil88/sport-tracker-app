import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const navLinkStyle =
  "text-green-100 text-lg font-bold hover:text-sky-500";

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 bg-opacity-80 w-0.5/5 p-4 shadow-xl shadow-sky-500 min-h-screen flex">
      <nav className="w-0.5/5 p-4 shadow-xl">
        <ul className="flex flex-col">
          <li className="py-4 flex">
            <NavLink
              to="/"
              className={navLinkStyle}
            >
              Home
            </NavLink>
          </li>

          <li className="py-4 flex">
            <NavLink
              to="/progresshistory"
              className={navLinkStyle}
            >
              Progress History
            </NavLink>
          </li>
          <li className="py-4 flex">
            <NavLink
              to="/signin"
              className={navLinkStyle}
            >
              Sign In
            </NavLink>
          </li>
          <li className="py-4 flex">
            <NavLink
              to="/workoutscheme"
              className={navLinkStyle}
            >
              Workout Scheme
            </NavLink>
          </li>

          <li className="py-4 flex">
            <NavLink
              to="/reviewsPage"
              className={navLinkStyle}
            >
              Reviews
            </NavLink>
          </li>

          <li className="py-4 flex">
            <NavLink
              to="/contactPage"
              className={navLinkStyle}
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
