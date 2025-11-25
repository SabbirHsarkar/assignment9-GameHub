
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure this import is here

import Register from './Pages/Register'; // assuming Register is in the pages folder

function App() {
  return (
    <div>
    <Register></Register>
      <ToastContainer /> {/* This will display toast notifications */}
    </div>
  );
}

export default App;

