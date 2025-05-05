import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-285px)] w-11/12 lg:w-10/12 mx-auto my-6">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
