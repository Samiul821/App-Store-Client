import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user } = use(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-6">
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
              {" "}
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
          </ul>
        </div>
        <NavLink to="/apps" className="btn btn-ghost text-xl">
          AppStore
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">
          <li>
            <NavLink className={"text-lg font-semibold"} to="/apps">
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink className={"text-lg font-semibold"} to="/myProfile">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2.5">
        <img
          className="w-10 h-10 rounded-full"
          src={`${user ? user.photoURL : userImg}`}
          alt=""
        />
        <Link to="/auth/login" className="btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
