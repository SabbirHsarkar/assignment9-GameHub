import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../Home/Home';
import About from '../Pages/About';
import Games from '../Pages/Games';
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
       
     
    ]
        
        
  },
]);