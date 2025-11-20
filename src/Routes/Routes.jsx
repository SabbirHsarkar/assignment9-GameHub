import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../Home/Home';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
   
    children:[
        {
         
         path: "/",
    Component:Home,
       
        }
       
     
    ]
        
        
  },
]);