import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Apps from "../pages/Apps";
import MyProfile from "../pages/MyProfile";
import Loading from "../pages/Loading";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "../provider/PrivateRoute";
import AppsDetails from "../pages/AppsDetails";
import About from "../components/About";
import Contact from "../components/ContactUs";
import TermsOfService from "../components/TermsOfService ";
import PrivacyPolicy from "../components/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
        loader: () => fetch("/apps.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: "/terms",
        element: <TermsOfService></TermsOfService>
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy></PrivacyPolicy>
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "apps-details/:id",
    element: (
      <PrivateRoute>
        <AppsDetails></AppsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/apps.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
]);

export default router;
