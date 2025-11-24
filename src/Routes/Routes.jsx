import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../Home/Home';
import About from '../Pages/About';
import Games from '../Pages/Games';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';
import PrivateRoute from './PrivateRoute';
import GameDetails from '../Pages/GameDetails';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
   
    children:[
        { 
         path: "/",
    Component:Home,
       
        },
          {
         path: "/games",
    Component:Games,
       
        },
        {
         path: "/login",
    Component:Login,
       
        },
         {
         path: "/signup",
    Component:Register,
       
        },
          {
         path: "/profile",
    element:<PrivateRoute><Profile></Profile></PrivateRoute>,
       
        },
        {
          path:"/details/:myId",
          element:<PrivateRoute><GameDetails></GameDetails></PrivateRoute>
        }
       
     
    ]
        
        
  },
]);