import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
       <div className="card w-full max-w-md bg-base-100 shadow-xl rounded-2xl">
          <div className="card-body p-8">
       
           <h2 className="text-3xl font-bold text-center mb-6">
           Log in
             </h2>
       
               <form className="space-y-4">
       
   
       
                     <div>
                <label className="label">
        <span className="label-text font-semibold">Email</span>
                      </label>
                  <input 
                                       type="email" 
                                       className="input input-bordered w-full" 
                                       placeholder="Enter your email"
                                   />
                               </div>
       
                    
       
                               <div>
                                   <label className="label">
                                       <span className="label-text font-semibold">Password</span>
                         </label>
                      <input 
                          type="password" 
                  className="input input-bordered w-full" 
          placeholder="Enter password"
                  />
                </div>
       
      <div className="flex justify-between text-sm">
         <Link className="link link-hover text-blue-600">
                   Forgot password?
             </Link>
         </div>
       
         <button className="btn btn-neutral w-full mt-2">
          Login
                  </button>
       
     <p className="text-center mt-3 text-sm">
                      Don't have an account?
         <Link to="/signup" className="text-blue-600 font-semibold ml-1 link link-hover">
              Register
                                   </Link>
                               </p>
       
                           </form>
       
                       </div>
                   </div>
               </div>
    );
};

export default Login;