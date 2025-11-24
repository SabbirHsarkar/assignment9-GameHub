import React from 'react';

const ForgetPass = () => {
    return (
        <div>
            <form  className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
             
            </div>
             </form>
            
        </div>
    );
};

export default ForgetPass;