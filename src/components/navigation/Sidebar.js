import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinkStyle = "text-green-100 text-lg font-bold hover:text-sky-500";

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/progresshistory", label: "Progress History" },
    { path: "/signin", label: "Sign In" },
    { path: "/workoutscheme", label: "Workout Scheme" },
    { path: "/ReviewsPage", label: "Reviews" },
    { path: "/ContactPage", label: "Contact Us" },
  ];

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 bg-opacity-80 w-0.5/5 p-4 shadow-xl shadow-sky-500 min-h-screen flex">
      <nav aria-label="Main Navigation" className="w-0.5/5 p-4 shadow-xl">
        {navigationItems.map((item) => (
          <li key={item.path} className="py-4 flex">
            <NavLink to={item.path} className={navLinkStyle}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
