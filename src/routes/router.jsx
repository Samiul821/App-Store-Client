import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Apps from '../pages/Apps';
import MyProfile from '../pages/MyProfile';
import Loading from '../pages/Loading';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/apps",
                element: <Apps></Apps>,
                loader: () => fetch("/apps.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/myProfile",
                element: <MyProfile></MyProfile>
            }
        ]
    }
])

export default router;