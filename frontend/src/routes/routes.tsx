import React from 'react';
import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

interface Route {
  path?: string;
  element: React.ReactNode;
  index?: boolean;
  children?: Route[];
}

const routes: Route[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/signup',
        element: <SignUp />,
    },
    {
        path: 'login',
        element: <Login />
    }
];

export default routes as RouteObject[]; // this might break not sure lol
