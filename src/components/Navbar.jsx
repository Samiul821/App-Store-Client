import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfull.");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-[100px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/myProfile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/apps"
          className="text-2xl font-extrabold tracking-tight text-indigo-600 hover:text-indigo-800 transition duration-200"
        >
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            AppStore
          </span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `text-lg font-semibold px-3 py-1 rounded-md transition duration-200 ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 border-b-2 border-transparent hover:border-blue-400"
                }`
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-lg font-semibold px-3 py-1 rounded-md transition duration-200 ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 border-b-2 border-transparent hover:border-blue-400"
                }`
              }
              to="/myProfile"
            >
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `text-lg font-semibold px-3 py-1 rounded-md transition duration-200 ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 border-b-2 border-transparent hover:border-blue-400"
                }`
              }
              to="/about"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2.5">
        {user && (
          <img
            className="w-10 h-10 rounded-full"
            src={user.photoURL}
            alt={user.displayName || "User"}
            title={user.displayName || "User"}
          />
        )}

        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-8">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
